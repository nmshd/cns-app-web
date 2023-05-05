sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/_AppController"], (App, AccountController) => {
    "use strict"
    return AccountController.extend("nmshd.app.flows.app.About", {
        routeName: "app.about",

        async onRouteMatched(oEvent) {
            App.setMenuIcon()
            App.appController.clearRight()
            App.appController.setTitle(this.resource("master.about"))
            await this.super("onRouteMatched", oEvent)
            App.appController.setTitle(this.resource("master.about"))
            const aAccounts = await App.localAccountController().getAccounts()
            this.viewProp("/accountCount", aAccounts.length)
        },

        createViewModel() {
            return {
                busy: false,
                delay: 0,
                isStartPage: true,
                isEndPage: false,
                accountCount: 0
            }
        },

        async refresh() {
            const aAccounts = await App.localAccountController().getAccounts()
            this.viewProp("/accountCount", aAccounts.length)
        },

        clear() {
            this.super("clear")
        },
        onCarouselPageChange(oEvent) {
            const activePageIndex = oEvent.mParameters.activePages[0]
            this.viewProp("/activePageIndex", activePageIndex)

            const carousel = this.byId("carousel")
            const length = carousel.getPages().length

            if (activePageIndex === 0) {
                this.viewProp("/isStartPage", true)
                this.viewProp("/isEndPage", false)
            } else if (activePageIndex === length - 1) {
                this.viewProp("/isStartPage", false)
                this.viewProp("/isEndPage", true)
            } else {
                this.viewProp("/isStartPage", false)
                this.viewProp("/isEndPage", false)
            }
        },
        toFirst() {
            const carousel = this.byId("carousel")
            const pages = carousel.getPages()
            const pageId = pages[0].sId
            carousel.setActivePage(pageId)
        },
        toLast() {
            const carousel = this.byId("carousel")
            const pages = carousel.getPages()
            const pageId = pages[pages.length - 1].sId
            carousel.setActivePage(pageId)
        },
        next() {
            const carousel = this.byId("carousel")
            carousel.next()
        },
        previous() {
            const carousel = this.byId("carousel")
            carousel.previous()
        },
        toAboutProject() {
            this.navTo("app.aboutProject")
        },
        toOnboard() {
            App.navTo("", "accounts.onboardoverview", {
                backEnabled: true,
                backRoute: "app.about"
            })
        },
        toPrivacy() {
            App.navTo("", "app.privacy", {
                backEnabled: true,
                backRoute: "app.about"
            })
        },
        onNavButtonPress() {
            this.navBack("app.master")
        }
    })
})
