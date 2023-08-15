import { IUIBridge, LocalAccountDTO, UserfriendlyApplicationError, UserfriendlyResult } from "@nmshd/app-runtime"
import { DeviceOnboardingInfoDTO, FileDVO, IdentityDVO, LocalRequestDVO, MailDVO, MessageDVO } from "@nmshd/runtime"
import App from "./App"

/**
 * @namespace nmshd.app.core
 */
export default class UIBridge implements IUIBridge {
    public async showMessage(
        account: LocalAccountDTO,
        relationship: IdentityDVO,
        message: MessageDVO | MailDVO
    ): Promise<UserfriendlyResult<void>> {
        return new Promise((resolve, reject) => {
            appLogger.trace("UIBridge.showMessage", account, message)

            App.navTo("account.relationship.message", {
                relationshipId: relationship.relationship!.id,
                accountId: account.id,
                messageId: message.id
            })
            resolve(UserfriendlyResult.ok(undefined))
        })
    }

    public showRelationship(account: LocalAccountDTO, relationship: IdentityDVO): Promise<UserfriendlyResult<void>> {
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
            resolve(UserfriendlyResult.ok(undefined))
        })
    }

    public showFile(account: LocalAccountDTO, file: FileDVO): Promise<UserfriendlyResult<void>> {
        return new Promise((resolve) => {
            appLogger.trace("UIBridge.showFile", account, file)
            App.navTo("account.files.detail", { id: file.id, accountId: account.id })
            resolve(UserfriendlyResult.ok(undefined))
        })
    }

    public showDeviceOnboarding(deviceOnboardingInfo: DeviceOnboardingInfoDTO): Promise<UserfriendlyResult<void>> {
        App.disableAutoAccountSelection = true
        return new Promise((resolve) => {
            App.temporaryNavigationCache = { deviceOnboardingInfo: deviceOnboardingInfo }
            App.navTo("accounts.processdevicetoken", {})
            resolve(UserfriendlyResult.ok(undefined))
        })
    }

    public showRequest(account: LocalAccountDTO, request: LocalRequestDVO): Promise<UserfriendlyResult<void>> {
        return new Promise((resolve) => {
            appLogger.trace("UIBridge.showRequest", account, request)
            App.navTo("account.relationships.request", {
                accountId: account.id,
                requestId: request.id
            })
            resolve(UserfriendlyResult.ok(undefined))
        })
    }

    public showError(
        error: UserfriendlyApplicationError,
        account?: LocalAccountDTO
    ): Promise<UserfriendlyResult<void>> {
        return new Promise((resolve) => {
            App.error(error)
            resolve(UserfriendlyResult.ok(undefined))
        })
    }

    public requestAccountSelection(
        possibleAccounts: LocalAccountDTO[],
        title: string,
        description: string
    ): Promise<UserfriendlyResult<LocalAccountDTO | undefined>> {
        App.disableAutoAccountSelection = true // Within the account selection screen, do not automatically navigate to the profile's home screen (and possibly overwrite the upcoming uiBridge.showRequest() call)
        return new Promise(async (resolve) => {
            appLogger.info(`UIBridge.requestAccountSelection: Runtime triggered account selection.`)
            //If we already have a running account selection, cancel it (i.e. undefined account)
            if (App.accountSelectionCallback) {
                App.accountSelectionCallback()
            }

            App.accountSelectionCallback = (account: LocalAccountDTO) => {
                App.accountSelectionCallback = undefined
                if (account) {
                    appLogger.info(
                        `UIBridge.requestAccountSelection: User selected account ${account.name} with id ${account.id}.`
                    )
                } else {
                    appLogger.info(`UIBridge.requestAccountSelection: User cancelled the selection.`)
                }
                resolve(UserfriendlyResult.ok(account))
            }

            if (possibleAccounts.length === 0 || App.enforceAccountCreation) {
                App.navTo("accounts.processrelationshiptoken", {})
                return
            }
            App.openAccountSelectionPopup(possibleAccounts, title, description)
        })
    }
}
