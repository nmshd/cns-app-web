sap.ui.define(["nmshd/app/core/App", "nmshd/app/core/RoutingController"], (App, RoutingController) => {
    "use strict"
    return RoutingController.extend("nmshd.app.flows.app.AboutProject", {
        routeNames: ["app.aboutProject", "account.aboutProject"],

        onInitialized() {
            this.resetViewModel()
        },

        async onRouteMatched(oEvent) {
            App.setBackIcon()
            App.appController.clearRight()
            App.appController.setTitle(this.resource("master.aboutProject"))
            await this.super("onRouteMatched", oEvent)
            App.appController.setTitle(this.resource("master.aboutProject"))
            App.setBackIcon()
        },

        createViewModel() {
            return {
                busy: false,
                delay: 0,
                isStartPage: true,
                isEndPage: false
            }
        },

        refresh() {},

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
        }
    })
})
