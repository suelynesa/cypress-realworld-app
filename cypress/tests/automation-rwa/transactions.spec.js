import credentials from '../../fixtures/credentials.json' 
import TransactionPage from '../../pages/transactionPage.js'

const transactionPage = new TransactionPage()

describe('Transaction History Feature (logged user)', () => {

    beforeEach(() => {
  cy.login(credentials.valid.username, credentials.valid.password)
})

    it('View transaction history (Everyone) successfully', () => {
        
        transactionPage.checkEveryoneTransactions()
        transactionPage.checkTransactionList().should('be.visible').and('have.length.greaterThan', 0)             
               
        })

describe('Transaction History (new user)', () => {

    it('Should display empty transaction history for new user', () => {
        
        const username = `user_${Date.now()}`
        const password = 'password123'

        cy.signup(username, password)

        cy.login(username, password)

        transactionPage.checkMineTransactions()
        transactionPage.checkTransactionList().should('not.exist')

        cy.contains(/no transactions/i).should('be.visible')
               
        })    
    })
})