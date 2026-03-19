class TransactionPage {

    selectorsList() {
        const selectors = {
            navbarHomeButton: '[data-test="sidenav-home"]',
            everyoneButton: '[data-test="nav-public-tab"]',
            mineButton: '[href="/personal"]',
            transactionList: '[data-test="transaction-list"]',
        }            

        return selectors
    }

    checkEveryoneTransactions() {
        cy.get(this.selectorsList().everyoneButton)
        cy.get(this.selectorsList().transactionList)
    }

    checkMineTransactions() {
        cy.get(this.selectorsList().navbarHomeButton).click()
        cy.get(this.selectorsList().mineButton).click()
    }

    checkTransactionList() {
        return cy.get(this.selectorsList().transactionList)
    }

    checkFirstTransaction(contact, note, transferAmount) {
        cy.get(this.selectorsList().transactionList)
            .children()
            .first()
            .should('be.visible')
            .and('contain.text', contact)
            .and('contain.text', note)
            .and('contain.text', transferAmount)
    }

    checkNegativeValue() {
        cy.get(this.selectorsList().transactionList)
            .children()
            .first()
            .should('not.contain.text', '--$')
    }

}  
    export default TransactionPage