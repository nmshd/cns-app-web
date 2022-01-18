sap.ui.define([], () => {
    "use strict"

    return {
        iconByMimetype(mimetype) {
            let icon = ""
            switch (mimetype) {
                default:
                    icon = "document"
                    break

                case "audio/aac":
                case "audio/midi":
                case "audio/x-midi":
                case "audio/mpeg":
                case "audio/ogg":
                case "audio/wav":
                case "audio/webm":
                case "audio/3gpp":
                case "audio/3gpp2":
                    icon = "attachment-audio"
                    break

                case "application/vnd.amazon.ebook":
                case "application/epub+zip":
                    icon = "attachment-e-pub"
                    break

                case "text/html":
                    icon = "attachment-html"
                    break

                case "image/bmp":
                case "image/gif":
                case "image/vnd.microsoft.icon":
                case "image/jpeg":
                case "image/png":
                case "image/svg+xml":
                case "image/webp":
                case "image/tiff":
                    icon = "attachment-photo"
                    break

                case "application/rtf":
                case "text/plain":
                case "text/css":
                case "text/javascript":
                case "text/xml":
                    icon = "document-text"
                    break

                case "video/x-msvideo":
                case "video/mpeg":
                case "video/ogg":
                case "video/webm":
                case "video/3gpp":
                case "video/3ggp2":
                    icon = "attachment-video"
                    break

                case "application/x-freearc":
                case "application/zip":
                case "application/x-tar":
                case "application/x-rar-compressed":
                case "application/x-bzip":
                case "application/x-bzip2":
                case "application/x-7z-compressed":
                    icon = "attachment-zip-file"
                    break

                case "text/calendar":
                    icon = "create-entry-time"
                    break

                case "application/x-abiword":
                case "application/msword":
                case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                case "application/vnd.oasis.opendocument.text":
                    icon = "doc-attachment"
                    break

                case "application/vnd.ms-excel":
                case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                case "application/vnd.oasis.opendocument.spreadsheet":
                case "text/csv":
                    icon = "excel-attachment"
                    break

                case "application/pdf":
                    icon = "pdf-attachment"
                    break

                case "application/vnd.ms-powerpoint":
                case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
                case "application/vnd.visio":
                case "application/vnd.oasis.opendocument.presentation":
                    icon = "ppt-attachment"
                    break

                case "application/octet-stream":
                    icon = "course-program"
                    break

                case "application/json":
                case "application/javascript":
                case "application/x-shockwave-flash":
                case "application/xhtml+xml":
                case "application/xml":
                case "application/vnd.mozilla.xul+xml":
                    icon = "request"
                    break

                case "application/vnd.ms-fontobject":
                case "font/otf":
                case "font/woff":
                case "font/woff2":
                    icon = "attachment-text-file"
                    break

                case "application/x-csh":
                case "application/java-archive":
                case "application/vnd.apple.installer+xml":
                case "application/ogg":
                case "application/x-sh":
                    icon = "create"
                    break
            }
            return "sap-icon://" + icon
        }
    }
})
