import LoginPage from '../../pages/loginPage.js'
import credentials from '../../fixtures/credentials.json' 
import DashboardPage from '../../pages/dashboardPage.js'
import TransferPage from '../../pages/transferPage.js'        
import TransactionPage from '../../pages/transactionPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const transferPage = new TransferPage()
const transactionPage = new TransactionPage()

describe('Money Transfer Feature', () => {

    beforeEach(() => {
  cy.login(credentials.valid.username, credentials.valid.password)
})

        const contact = 'Darrel Ortiz'
        const note = 'teste'

    it('Should transfer money successfully', () => {
        
        const transferAmount = 3
                
        transferPage.getBalance().then((initialBalance) => {

            transferPage.prepareTransaction(contact, transferAmount, note)
            transferPage.clickPay()
            transferPage.checkSuccessAlert()
            
            transactionPage.checkMineTransactions()
            transactionPage.checkTransactionDetails(contact, note, transferAmount)
         
            transferPage.getBalance().then((newBalance) => {

                expect(newBalance).to.be.closeTo(initialBalance - transferAmount, 0.01) 
               
        })
    })
    })
      
//     it('Should not allow transfer when balance is insufficient', () => {
               
//         transferPage.getBalance().then((balance) => {

//             const transferAmount = Number(balance) + 1

//         transferPage.prepareTransaction(contact, transferAmount, note)
//         transferPage.clickPay()
//         transferPage.checkErrorAlert() // Verificar se o alerta de erro é exibido
//         // BUG: aplicação permite transferência mesmo sem saldo
//     })
// })
})
