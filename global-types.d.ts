import * as _JSSNative from "@js-soft/native-web"
import * as _TSServal from "@js-soft/ts-serval"
import * as _NMSHDAppRuntime from "@nmshd/app-runtime"
import * as _NMSHDContent from "@nmshd/content"
import * as _NMSHDCrypto from "@nmshd/crypto"
import * as _NMSHDRuntime from "@nmshd/runtime"
import * as _NMSHDTransport from "@nmshd/transport"
import * as _tsLogger from "./typings/logger"

declare global {
    const NMSHDRuntime: typeof _NMSHDRuntime
    const NMSHDAppRuntime: typeof _NMSHDAppRuntime
    const NMSHDContent: typeof _NMSHDContent
    const JSSNative: typeof _JSSNative
    const TSServal: typeof _TSServal

    const runtime: _NMSHDAppRuntime.AppRuntime
    const bootstrapper: _JSSNative.INativeBootstrapper
    const _bootstrapPromise: Promise
    const QRCode: any
    const App: any

    const appLogger: _tsLogger.ILogger
    const NMSHDTransport: typeof _NMSHDTransport

    /*
    const NMSHDTransport: {
        CoreDate: typeof _NMSHDTransport.CoreDate
        CoreId: typeof _NMSHDTransport.CoreId
        CoreAddress: typeof _NMSHDTransport.CoreAddress
    }
    */
    const NMSHDCrypto: {
        CoreBuffer: typeof _NMSHDCrypto.CoreBuffer
        Encoding: typeof _NMSHDCrypto.Encoding
    }

    interface Window {
        NMSHDRuntime: typeof _NMSHDRuntime
        NMSHDAppRuntime: typeof _NMSHDAppRuntime
        NMSHDContent: typeof _NMSHDContent
        JSSNative: typeof _JSSNative
        TSServal: typeof _TSServal
        runtime: _NMSHDAppRuntime.AppRuntime
        bootstrapper: _JSSNative.INativeBootstrapper
        _bootstrapPromise: Promise
        App: any
        QRCode: any
        appLogger: _tsLogger.ILogger
        navigator: Navigator
        openedByOpenUrlEvent: boolean | undefined
    }

    interface Navigator {
        splashscreen: any
    }

    interface JQueryStatic {
        sap: any
    }
}
