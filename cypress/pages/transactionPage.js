class TransactionPage {

    selectorsList() {
        const selectors = {
            navbarHomeButton: '[data-test="sidenav-home"]',
            mineButton: '[href="/personal"]',
            transactionList: '[data-test="transaction-list"]',
        }            

        return selectors
    }

    checkMineTransactions() {
        cy.get(this.selectorsList().navbarHomeButton).click()
        cy.get(this.selectorsList().mineButton).click()
    }

    checkTransactionDetails(contact, note, value) {
        cy.get(this.selectorsList().transactionList)
            .children()
            .first()
            .should('be.visible')
            .and('contain.text', contact)
            .and('contain.text', note)
            .and('contain.text', value)
    }

}
    export default TransactionPage