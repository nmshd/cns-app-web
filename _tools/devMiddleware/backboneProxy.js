const proxy = require("express-http-proxy")

module.exports = function () {
    const baseUrl = process.env.NMSHD_APP_BASEURL
    if (!baseUrl) throw new Error("environment variable NMSHD_APP_BASEURL is not set")

    return proxy(baseUrl)
}
