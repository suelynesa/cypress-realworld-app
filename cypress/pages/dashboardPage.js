class dashboardPage {

    selectorsList() {
        const selectors = {
            dashBoardGrid: '[data-test="nav-transaction-tabs"]',
        }

        return selectors
    }

    checkDashboardPage() {
        cy.get(this.selectorsList().dashBoardGrid)
    }

}

export default dashboardPage