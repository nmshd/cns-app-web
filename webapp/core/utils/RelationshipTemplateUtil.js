sap.ui.define(["nmshd/app/core/utils/ItemUtil", "sap/ui/model/json/JSONModel"], (ItemUtil, JSONModel) => {
    "use strict"

    return ItemUtil.extend("nmshd.app.core.utils.RelationshipTemplateUtil", {
        async getRelationshipTemplate(id) {
            if (!id) {
                App.error({
                    code: "error.app.noIdProvided",
                    message: "No id has been provided."
                })
                return
            }

            const relationshipTemplateResult =
                await runtime.currentSession.transportServices.relationshipTemplates.getRelationshipTemplate({
                    id: id
                })
            if (relationshipTemplateResult.isError) {
                App.error(relationshipTemplateResult.error)
                return
            }

            const templateDVO = await runtime.currentSession.expander.expandRelationshipTemplateDTO(
                relationshipTemplateResult.value
            )

            try {
                const model = new JSONModel(templateDVO)
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

        async getRelationshipTemplates() {
            const syncResult = await runtime.currentSession.transportServices.account.syncEverything()
            if (syncResult.isError) {
                App.error(syncResult.error)
                return
            }

            const relationshipTemplatesResult =
                await runtime.currentSession.transportServices.relationshipTemplates.getRelationshipTemplates({})
            if (relationshipTemplatesResult.isError) {
                App.error(relationshipTemplatesResult.error)
                return
            }
            try {
                const model = new JSONModel({ items: relationshipTemplatesResult.value })
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
        }
    })
})
