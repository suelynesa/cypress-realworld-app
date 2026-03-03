import LoginPage from '../../pages/loginPage.js'
import SignUpPage from '../../pages/signUpPage.js'
import DashboardPage from '../../pages/dashboardPage.js'
import { generateUser } from '../../support/factories/userFactory.js'

const loginPage = new LoginPage()
const signUpPage = new SignUpPage()
const dashboardPage = new DashboardPage()

describe('New User Registration RWA Tests', () => {

  let user

  beforeEach(() => {
    user = generateUser()
  })

// describe('Happy Path', () => {
//   it('Register new user successfully', () => {
//     loginPage.accessLoginPage()
//     loginPage.creatAccountButton()

//     signUpPage.accessSignUpPage()
//     signUpPage.fillUserData({firstName: user.firstName, lastName: user.lastName, username: user.username, password: user.password})
//     signUpPage.fillConfirmPassword(user.password)  
//     signUpPage.signUpButton()

//     cy.url().should('include', '/signin')

//     loginPage.loginWithAnyUser(user.username, user.password)
//     loginPage.signInButton()

//     dashboardPage.checkDashboardPage()
//   })       
//   })

// describe('Validation Scenarios', () => {
//     it('Should not allow registration with incomplete data', () => {
//       loginPage.accessLoginPage()
//       loginPage.creatAccountButton()

//       signUpPage.accessSignUpPage()
//       signUpPage.fillUserData({lastName: user.lastName, username: user.username, password: user.password})
//       signUpPage.fillConfirmPassword(user.password)  
//       signUpPage.validateFieldError(
//       signUpPage.selectorsList().firstNameField
// )
//       signUpPage.disableSignUpButton()

//     })

    it('Should demonstrate inconsistency when registering with spaces only', () => {  
      const spaces = '     '
      
      loginPage.accessLoginPage()
      loginPage.creatAccountButton()

      signUpPage.accessSignUpPage()
      signUpPage.fillUserData({
        firstName: spaces,
        lastName: spaces,
        username: spaces,
        password: '1234',
      })
      
      signUpPage.fillConfirmPassword('1234')
      signUpPage.signUpButton()

       // 1️⃣ Valida que redirecionou (cadastro foi aceito)
       cy.url().should('include', '/signin')

       // 2️⃣ Tenta logar com os mesmos dados
      //  loginPage.loginWithAnyUser(spaces, '1234')
      //  loginPage.signInButton()

      //  // 3️⃣ Valida que login NÃO funciona
      //  loginPage.wrongCredentialAlert()
      })
    })
