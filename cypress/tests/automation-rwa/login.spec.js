import LoginPage from '../../pages/loginPage.js'
import credentials from '../../fixtures/credentials.json' 
import DashboardPage from '../../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login RWA Tests', () => {

  it('Login - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(credentials.valid.username, credentials.valid.password)
    loginPage.signInButton()
    dashboardPage.checkDashboardPage()
   
  })

  it('Login - Failed', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(credentials.invalid.username, credentials.invalid.password)
    loginPage.signInButton()
    loginPage.wrongCredentialAlert() 

  })

  it('Login - Password Length Rule', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(credentials.valid.username, credentials.short.password)

    cy.get(loginPage.selectorsList().signInButton).should('be.disabled')

    loginPage.shortPasswordAlert('Password must contain at least 4 characters')
  })

})
