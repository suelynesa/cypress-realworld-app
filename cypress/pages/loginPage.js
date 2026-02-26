class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            signInButton: '[type="submit"]',
            wrongCredentialAlert: '[role="alert"]',
            shortPasswordAlert: '[id="password-helper-text"]'
    
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/signin')
        cy.url().should('include', 'signin')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).should('be.visible').type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        
    }

    signInButton() {
        cy.get(this.selectorsList().signInButton).click()
    }

    wrongCredentialAlert() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
    
    shortPasswordAlert(message) {
        cy.get(this.selectorsList().passwordField).blur()
        cy.get(this.selectorsList().shortPasswordAlert).should('be.visible').and('contain', message)
      
    }
    }

export default LoginPage