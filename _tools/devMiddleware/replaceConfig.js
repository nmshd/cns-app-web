/**
 * Custom UI5 Server middleware example
 *
 * @param {object} parameters Parameters
 * @param {object} parameters.resources Resource collections
 * @param {module:@ui5/fs.AbstractReader} parameters.resources.all Reader or Collection to read resources of the
 *                                        root project and its dependencies
 * @param {module:@ui5/fs.AbstractReader} parameters.resources.rootProject Reader or Collection to read resources of
 *                                        the project the server is started in
 * @param {module:@ui5/fs.AbstractReader} parameters.resources.dependencies Reader or Collection to read resources of
 *                                        the projects dependencies
 * @param {object} parameters.middlewareUtil Specification version dependent interface to a
 *                                        [MiddlewareUtil]{@link module:@ui5/server.middleware.MiddlewareUtil} instance
 * @returns {function} Middleware function to use
 */
module.exports = function ({ resources }) {
    const notDefinedEnvironmentVariables = ["NMSHD_APP_CLIENTID", "NMSHD_APP_CLIENTSECRET"].filter(
        (env) => !process.env[env]
    )

    if (notDefinedEnvironmentVariables.length > 0) {
        throw new Error(`Missing environment variable(s): ${notDefinedEnvironmentVariables.join(", ")}}`)
    }

    const package = require("../../package.json")
    return function (req, res, next) {
        if (!req.path.endsWith("config.json")) {
            // Do not handle non-JSON requests
            next()
            return
        }
        // Try to read a corresponding config file
        resources.rootProject
            .byPath(req.path)
            .then(async (resource) => {
                if (!resource) {
                    // No file found, hand over to next middleware
                    next()
                    return
                }
                try {
                    const content = await resource.getBuffer()
                    const contentAsString = content.toString()
                    const contentAsJSON = JSON.parse(contentAsString)
                    contentAsJSON.version = package.version

                    contentAsJSON.transport.platformClientId = globalThis.process.env.NMSHD_APP_CLIENTID
                    contentAsJSON.transport.platformClientSecret = globalThis.process.env.NMSHD_APP_CLIENTSECRET

                    res.end(JSON.stringify(contentAsJSON, null, 4))
                } catch (err) {
                    next(err)
                }
            })
            .catch((err) => {
                next(err)
            })
    }
}
