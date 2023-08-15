import { CoreBuffer, Encoding } from "@nmshd/crypto"
import { CoreDate } from "@nmshd/transport"
import App from "./App"

/**
 * @namespace nmshd.app.core
 */
export default abstract class Formatter {
    /**
     * Rounds the currency value to 2 digits
     * @param {string} sValue value to be formatted
     * @returns {string} formatted currency value with 2 digits
     */
    public static toCurrency(sValue: string) {
        if (!sValue) {
            return ""
        }

        return parseFloat(sValue).toFixed(2)
    }

    public static publicKeyFormatter(oValue: any) {
        let text = ""
        for (let key in oValue) {
            if (oValue.hasOwnProperty(key)) {
                const publicKey = oValue[key]
                text += key + ": valid from " + publicKey.validFrom + " to " + publicKey.validTo + "\n\r" // TODO: Translate in i18n
                text += publicKey.key.publicKey + "\n\r\n\r"
            }
        }
        return text
    }

    private static _toTranslated(sValue: string, fallback: string, forceTranslation: boolean = false) {
        if (!sValue) {
            return ""
        }
        if (sValue.startsWith("i18n://")) {
            sValue = sValue.substring(7)
        } else if (!forceTranslation) {
            return sValue
        }
        if (!App.component || !App.component.getModel("t")) {
            return fallback
        }
        const translated = App.component!.getModel("t")!.getProperty(sValue)
        if (translated === sValue && fallback) {
            return fallback
        } else {
            return translated
        }
    }

    private static parseDate(sValue: any) {
        try {
            if (!sValue) {
                return ""
            }

            if (!(sValue instanceof Date)) {
                sValue = new Date(sValue)
            }
        } catch (e) {
            sValue = "-"
        }
        return sValue
    }

    private static _fromResource(namespace: string, sValue: string) {
        if (!sValue) {
            sValue = ""
        }
        const r = App.appController.resource(namespace + sValue)
        if (r === namespace) {
            return sValue
        } else {
            return r
        }
    }

    public static hex2buf(hex: string) {
        const buffer = new ArrayBuffer(hex.length / 2)
        const array = new Uint8Array(buffer)
        let k = 0
        for (let i = 0; i < hex.length; i += 2) {
            array[k] = parseInt(hex[i] + hex[i + 1], 16)
            k++
        }

        return buffer
    }

    public static buf2hex(buffer: any) {
        return Array.prototype.map
            .call(new Uint8Array(buffer), (x) => {
                return ("00" + x.toString(16)).slice(-2)
            })
            .join("")
    }

    public static toLocaleDate(sValue: string) {
        sValue = Formatter.parseDate(sValue)
        if (!sValue) return sValue
        return CoreDate.from(sValue).format("dd.MM.yyyy")
    }

    public static toAbsoluteDate(sValue: any) {
        let str
        sValue = Formatter.parseDate(sValue)
        if (!sValue) return sValue

        if (sValue.getUTCSeconds() === 0 && sValue.getUTCMinutes() === 0 && sValue.getUTCHours() === 0) {
            str = CoreDate.from(sValue.toISOString()).format("dd.MM.yyyy")
        } else {
            str = CoreDate.from(sValue.toISOString()).format("dd.MM.yyyy HH:mm:ss")
        }
        return str
    }

    public static toRelativeDate(sValue: any) {
        let str
        sValue = Formatter.parseDate(sValue)
        if (!sValue) return sValue

        let mom = CoreDate.from(sValue)

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
            str = mom.dateTime.toLocaleString(mom.dateTime.constructor.DATETIME_MED)
        }

        return str
    }

    public static toTranslated(sValue: string, fallback: string) {
        return Formatter._toTranslated(sValue, fallback)
    }

    public static toForcedTranslated(sValue: string, fallback: string) {
        return Formatter._toTranslated(sValue, fallback, true)
    }

    public static toGender(sValue: string) {
        if (!sValue) return ""
        return Formatter.fromResource("gender." + sValue)
    }

    public static toString(oObject: any) {
        if (oObject && typeof oObject.toString === "function") {
            return oObject.toString()
        }
        return "" + oObject
    }

    public static toJSON(oObject: any) {
        if (!oObject) return
        try {
            return JSON.stringify(oObject, null, 2)
        } catch (e) {
            return "-"
        }
    }

    public static fromArray(value: any) {
        if (value instanceof Array) {
            return value.join(",")
        }
        return value
    }

    public static toBase64(value: any) {
        if (!value) return ""
        if (typeof value.toBase64 === "function") {
            return value.toBase64.apply(value)
        }
        if (value instanceof CoreBuffer) {
            return value.toString(Encoding.Base64)
        }
        return value
    }

    public static fromHex(value: any) {
        const sValue = "" + value

        if (!sValue || sValue.length % 2) return sValue

        try {
            const decoder = new TextDecoder("utf8")
            return decoder.decode(Formatter.hex2buf(sValue))
        } catch (e) {
            return sValue
        }
    }

    public static truncate(sValue: string, maxlength: number, truncationSymbol: string) {
        if (!sValue || typeof sValue !== "string") return ""
        if (typeof truncationSymbol === "undefined") truncationSymbol = "..."
        if (!maxlength) maxlength = 10
        if (sValue.length > maxlength) return sValue.substr(0, maxlength) + truncationSymbol
        return sValue
    }

    public static fromResource(sValue: string) {
        return Formatter._fromResource("", sValue)
    }

    public static attributeName(sValue: string) {
        const resource = Formatter._fromResource("attribute.", sValue)
        return Formatter.toTranslated(sValue, resource ?? "")
    }

    public static value(sValue: string) {
        if (sValue === "" || sValue === undefined || sValue === null) {
            sValue = "-"
        }
        return sValue
    }

    public static async toTitle(address: string) {
        return (await App.getInfoForAddress(address)).title
    }

    /**
     * @param {RelationshipDVO} relationship
     */
    public static toRelationshipStatusIcon(relationship: any) {
        if (!relationship) return ""
        let statusIcon
        switch (relationship.status) {
            default:
                break
            case "Active":
                statusIcon = "sap-icon://chain-link"
                break
            case "Pending":
                if (relationship.direction === "Outgoing") {
                    statusIcon = "sap-icon://outbox"
                } else {
                    statusIcon = "sap-icon://inbox"
                }

                break
            case "Rejected":
                statusIcon = "sap-icon://decline"
                break
            case "Revoked":
                statusIcon = "sap-icon://employee-rejections"
                break
        }
        return statusIcon
    }
}
