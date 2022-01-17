sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/Formatter"], (App, Formatter) => {
    ;("use strict")
    return {
        /**
         * @param {RelationshipDVO} relationship
         */
        toRelationshipStatusIcon(relationship) {
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
})
