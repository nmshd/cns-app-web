sap.ui.define(["nmshd/app/core/utils/ItemUtil", "sap/ui/model/json/JSONModel"], (ItemUtil, JSONModel) => {
    "use strict"

    return ItemUtil.extend("nmshd.app.core.utils.RelationshipUtil", {
        async getRelationship(id) {
            if (!id) {
                App.error({
                    code: "error.app.noIdProvided",
                    message: "No id has been provided."
                })
                return
            }

            const relationshipResult = await runtime.currentSession.appServices.relationships.getRelationship({
                id: id
            })
            if (relationshipResult.isError) {
                if (relationshipResult.error.code !== "error.runtime.recordNotFound") {
                    App.error(relationshipResult.error)
                }
                return
            }
            try {
                const model = new JSONModel(relationshipResult.value)
                return model
            } catch (e) {
                App.error(
                    {
                        code: "error.app.jsonModel",
                        message: "Error while creating JSONMOdel."
                    },
                    e
                )
                return
            }
        },

        async getRelationshipByAddress(address) {
            if (!address) {
                App.error({
                    code: "error.app.noAddressProvided",
                    message: "No address has been provided."
                })
                return
            }

            const relationshipResult = await runtime.currentSession.appServices.relationships.getRelationshipByAddress({
                address: address
            })
            if (relationshipResult.isError) {
                if (relationshipResult.error.code !== "error.runtime.recordNotFound") {
                    App.error(relationshipResult.error)
                }
                return
            }
            try {
                const model = new JSONModel(relationshipResult.value)
                return model
            } catch (e) {
                App.error(
                    {
                        code: "error.app.jsonModel",
                        message: "Error while creating JSONMOdel."
                    },
                    e
                )
                return
            }
        },

        async getRelationships() {
            const syncResult = await runtime.currentSession.transportServices.account.syncEverything()
            if (syncResult.isError) {
                App.error(syncResult.error)
                return
            }
            const relationshipsResult = await runtime.currentSession.appServices.relationships.getRelationships({})
            if (relationshipsResult.isError) {
                App.error(relationshipsResult.error)
                return
            }
            try {
                const model = new JSONModel({ items: relationshipsResult.value })
                return model
            } catch (e) {
                App.error(
                    {
                        code: "error.app.jsonModel",
                        message: "Error while creating JSONMOdel."
                    },
                    e
                )
                return
            }
        },

        async acceptRelationshipCreationChange(relationshipId, content) {
            if (!relationshipId) {
                App.error({
                    code: "error.app.noIdProvided",
                    message: "No id has been provided."
                })
                return
            }
            if (typeof content === "undefined") {
                content = {}
            }

            if (typeof content !== "object") {
                App.error({
                    code: "error.app.noValidContent",
                    message: "No valid content has been provided."
                })
                return
            }

            const acceptResult =
                await runtime.currentSession.appServices.relationships.acceptRelationshipCreationChange(
                    relationshipId,
                    content
                )
            if (acceptResult.isError) {
                App.error(acceptResult.error)
                return
            }

            return true
        },

        async rejectRelationshipCreationChange(relationshipId, content) {
            if (!relationshipId) {
                App.error({
                    code: "error.app.noIdProvided",
                    message: "No id has been provided."
                })
                return
            }
            if (typeof content === "undefined") {
                content = {}
            }

            if (typeof content !== "object") {
                App.error({
                    code: "error.app.noValidContent",
                    message: "No valid content has been provided."
                })
                return
            }

            const acceptResult =
                await runtime.currentSession.appServices.relationships.rejectRelationshipCreationChange(
                    relationshipId,
                    content
                )
            if (acceptResult.isError) {
                App.error(acceptResult.error)
                return
            }

            return true
        },

        async revokeRelationshipCreationChange(relationshipId, content) {
            if (!relationshipId) {
                App.error({
                    code: "error.app.noIdProvided",
                    message: "No id has been provided."
                })
                return
            }
            if (typeof content === "undefined") {
                content = {}
            }

            if (typeof content !== "object") {
                App.error({
                    code: "error.app.noValidContent",
                    message: "No valid content has been provided."
                })
                return
            }

            const revokeResult =
                await runtime.currentSession.appServices.relationships.revokeRelationshipCreationChange(
                    relationshipId,
                    content
                )
            if (revokeResult.isError) {
                App.error(revokeResult.error)
                return
            }

            return true
        }
    })
})
