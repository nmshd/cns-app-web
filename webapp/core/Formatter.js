sap.ui.define(["nmshd/app/core/App"], (App) => {
    "use strict"

    const parseDate = (sValue) => {
        try {
            if (!sValue) {
                return ""
            }

            if (!(sValue instanceof Date)) {
                sValue = new Date(sValue)
            }
        } catch (e) {
            sValue = "Error in date conversion."
        }
        return sValue
    }

    const buf2hex = (buffer) => {
        return Array.prototype.map
            .call(new Uint8Array(buffer), (x) => {
                return ("00" + x.toString(16)).slice(-2)
            })
            .join("")
    }

    const hex2buf = (hex) => {
        const buffer = new ArrayBuffer(hex.length / 2)
        const array = new Uint8Array(buffer)
        let k = 0
        for (let i = 0; i < hex.length; i += 2) {
            array[k] = parseInt(hex[i] + hex[i + 1], 16)
            k++
        }

        return buffer
    }

    const fromResource = (namespace, sValue) => {
        if (!sValue) {
            sValue = ""
        }
        const r = App.component.getModel("t").getProperty(namespace + sValue)
        if (r === namespace) {
            return sValue
        } else {
            return r
        }
    }

    const toTranslated = (sValue, fallback, forceTranslation) => {
        if (!sValue) {
            return ""
        }
        if (sValue.startsWith("i18n://")) {
            sValue = sValue.substring(7)
        } else if (!forceTranslation) {
            return sValue
        }
        const translated = App.component.getModel("t").getProperty(sValue)
        if (translated === sValue && fallback) {
            return fallback
        } else {
            return translated
        }
    }

    return {
        /**
         * Rounds the currency value to 2 digits
         *
         * @public
         * @param {string} sValue value to be formatted
         * @returns {string} formatted currency value with 2 digits
         */
        toCurrency(sValue) {
            if (!sValue) {
                return ""
            }

            return parseFloat(sValue).toFixed(2)
        },

        publicKeyFormatter(oValue) {
            let text = ""
            for (let key in oValue) {
                if (oValue.hasOwnProperty(key)) {
                    const publicKey = oValue[key]
                    text += key + ": valid from " + publicKey.validFrom + " to " + publicKey.validTo + "\n\r" // TODO: Translate in i18n
                    text += publicKey.key.publicKey + "\n\r\n\r"
                }
            }
            return text
        },

        toTranslated(sValue, fallback) {
            return toTranslated(sValue, fallback)
        },
        toForcedTranslated(sValue, fallback) {
            return toTranslated(sValue, fallback, true)
        },

        toGender(sValue) {
            if (!sValue) return ""
            return fromResource("gender.", sValue)
        },

        async toTitle(address) {
            return await App.getInfoForAddress(address).title
        },

        toLocaleDate(sValue) {
            sValue = parseDate(sValue)
            if (!sValue) return sValue
            return NMSHDTransport.CoreDate.from(sValue).format("dd.MM.yyyy")
        },

        toAbsoluteDate(sValue) {
            let str
            sValue = parseDate(sValue)
            if (!sValue) return sValue

            if (sValue.getUTCSeconds() === 0 && sValue.getUTCMinutes() === 0 && sValue.getUTCHours() === 0) {
                str = NMSHDTransport.CoreDate.from(sValue.toISOString()).format("dd.MM.yyyy")
            } else {
                str = NMSHDTransport.CoreDate.from(sValue.toISOString()).format("dd.MM.yyyy HH:mm:ss")
            }
            return str
        },

        toString(oObject) {
            if (oObject && typeof oObject.toString === "function") {
                return oObject.toString()
            }
            return "" + oObject
        },

        toJSON(oObject) {
            if (!oObject) return
            try {
                return JSON.stringify(oObject, null, 2)
            } catch (e) {
                return "-"
            }
        },

        toRelativeDate(sValue) {
            let str
            sValue = parseDate(sValue)
            if (!sValue) return sValue

            let mom = NMSHDTransport.CoreDate.from(sValue)

            const diffNow = mom.dateTime.diffNow(["seconds"])
            const diffSec = Math.abs(diffNow.seconds)
            if (diffSec < 10) {
                mom = mom.subtract({ seconds: 5 })
                str = mom.dateTime.toRelative()
            } else if (diffSec < 3600 * 24 /* One Day */) {
                str = mom.dateTime.toRelative()
            } else if (diffSec < 3600 * 24 * 7 /* One Week */) {
                str = mom.dateTime.toRelativeCalendar()
            } else {
                // @ts-ignore
                str = mom.dateTime.toLocaleString(mom.dateTime.constructor.DATETIME_MED)
            }

            return str
        },

        fromAddress(address) {
            if (address == App.address) {
                return "Ich (" + address + ")" // TODO: Translate in i18n
            }
            const identity = App.profile.getIdentity(address)
            if (identity && identity.title) {
                return identity.title + " (" + address + ")"
            } else {
                return "Unbekannt (" + address + ")" // TODO: Translate in i18n
            }
        },

        fromArray(value) {
            if (value instanceof Array) {
                return value.join(",")
            }
            return value
        },

        toBase64(value) {
            if (!value) return ""
            if (typeof value.toBase64 === "function") {
                return value.toBase64.apply(value)
            }
            if (value instanceof NMSHDCrypto.CoreBuffer) {
                return value.toString(NMSHDCrypto.Encoding.Base64)
            }
            return value
        },

        fromHex(sValue) {
            sValue = "" + sValue

            if (!sValue || sValue.length % 2) return sValue

            try {
                const decoder = new TextDecoder("utf8")
                return decoder.decode(hex2buf(sValue))
            } catch (e) {
                return sValue
            }
        },

        truncate(sValue, maxlength, truncationSymbol) {
            if (!sValue || typeof sValue !== "string") return ""
            if (typeof truncationSymbol === "undefined") truncationSymbol = "..."
            if (!maxlength) maxlength = 10
            if (sValue.length > maxlength) return sValue.substr(0, maxlength) + truncationSymbol
            return sValue
        },
        fromResource(sValue) {
            return fromResource("", sValue)
        },
        attributeName(sValue) {
            const resource = fromResource("attribute.", sValue)
            return toTranslated(sValue, resource)
        },
        value(sValue) {
            if (sValue === "" || sValue === undefined || sValue === null) {
                sValue = "-"
            }
            return sValue
        }
    }
})
