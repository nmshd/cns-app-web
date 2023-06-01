//import { ApplicationError, Result } from "@js-soft/ts-utils"
import { IUIBridge, LocalAccountDTO, UserfriendlyApplicationError, UserfriendlyResult } from "@nmshd/app-runtime"
import { MessageDVO, IdentityDVO, MailDVO, FileDVO, DeviceOnboardingInfoDTO, LocalRequestDVO } from "@nmshd/runtime"

export default class UIBridge implements IUIBridge {
    // @ts-ignore
    public async showMessage(
        account: LocalAccountDTO,
        relationship: IdentityDVO,
        message: MessageDVO | MailDVO
    ): Promise<Result<void, ApplicationError>> {
        return new Promise((resolve, reject) => {
            appLogger.trace("UIBridge.showMessage", account, message)

            App.navTo("account.relationship.message", {
                relationshipId: relationship.relationship!.id,
                accountId: account.id,
                messageId: message.id
            })
            // @ts-ignore
            resolve(Result.ok(undefined))
        })
    }

    // @ts-ignore
    public showRelationship(
        account: LocalAccountDTO,
        relationship: IdentityDVO
    ): Promise<Result<void, ApplicationError>> {
        return new Promise((resolve, reject) => {
            appLogger.trace("UIBridge.showRelationship", account, relationship)

            if (
                relationship.relationship!.status === "Pending" &&
                relationship.relationship!.direction === "Outgoing"
            ) {
                App.navTo("account.outgoingrequest", {
                    relationshipId: relationship.relationship!.id,
                    accountId: account.id
                })
            } else if (
                relationship.relationship!.status === "Pending" &&
                relationship.relationship!.direction === "Incoming"
            ) {
                App.navTo("account.incomingrequest", {
                    relationshipId: relationship.relationship!.id,
                    accountId: account.id
                })
            } else {
                App.navTo("account.relationship.home", {
                    relationshipId: relationship.relationship!.id,
                    accountId: account.id
                })
            }
            // @ts-ignore
            resolve(Result.ok(undefined))
        })
    }

    // @ts-ignore
    public showFile(account: LocalAccountDTO, file: FileDVO): Promise<Result<void, ApplicationError>> {
        return new Promise((resolve) => {
            appLogger.trace("UIBridge.showFile", account, file)
            App.navTo("account.files.detail", { id: file.id, accountId: account.id })
            // @ts-ignore
            resolve(Result.ok(undefined))
        })
    }

    // @ts-ignore
    public showDeviceOnboarding(
        deviceOnboardingInfo: DeviceOnboardingInfoDTO
    ): Promise<Result<void, ApplicationError>> {
        App.disableAutoAccountSelection = true
        return new Promise((resolve) => {
            App.navTo("accounts.processdevicetoken", {}, { deviceOnboardingInfo: deviceOnboardingInfo })
            // @ts-ignore
            resolve(Result.ok(undefined))
        })
    }

    // @ts-ignore
    public showRequest(account: LocalAccountDTO, request: LocalRequestDVO): Promise<Result<void, ApplicationError>> {
        return new Promise((resolve) => {
            appLogger.trace("UIBridge.showRequest", account, request)
            App.navTo("account.relationships.request", {
                accountId: account.id,
                requestId: request.id
            })
            // @ts-ignore
            resolve(Result.ok(undefined))
        })
    }

    // @ts-ignore
    public showError(
        error: UserfriendlyApplicationError,
        account?: LocalAccountDTO
    ): Promise<Result<void, ApplicationError>> {
        return new Promise((resolve) => {
            App.error(error)
            // @ts-ignore
            resolve(Result.ok(undefined))
        })
    }

    // @ts-ignore
    public requestAccountSelection(
        possibleAccounts: LocalAccountDTO[],
        title: string,
        description: string
    ): Promise<Result<LocalAccountDTO | undefined, ApplicationError>> {
        App.disableAutoAccountSelection = true // Within the account selection screen, do not automatically navigate to the profile's home screen (and possibly overwrite the upcoming uiBridge.showRequest() call)
        return new Promise(async (resolve) => {
            //If we already have a running account selection, cancel it (i.e. undefined account)
            if (App.accountSelectionCallback) {
                App.accountSelectionCallback()
            }

            App.accountSelectionCallback = (account: LocalAccountDTO) => {
                App.accountSelectionCallback = null
                if (account) {
                    appLogger.info(
                        `UIBridge.requestAccountSelection: User selected account ${account.name} with id ${account.id}.`
                    )
                } else {
                    appLogger.info(`UIBridge.requestAccountSelection: User cancelled the selection.`)
                }
                resolve(NMSHDAppRuntime.UserfriendlyResult.ok(account))
            }

            if (possibleAccounts.length === 0 || App.enforceAccountCreation) {
                App.navTo("accounts.processrelationshiptoken", {})
                return
            }
            App.appController.openAccountSelectionPopup(possibleAccounts, title, description)
        })
    }
}
