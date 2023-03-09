const proxy = require("express-http-proxy")

module.exports = function () {
    const baseUrl = process.env.NMSHD_APP_BASEURL
    if (!baseUrl) new Error("Missing environment variable NMSHD_APP_BASEURL")

    return proxy(baseUrl, { limit: "100mb" })
}
