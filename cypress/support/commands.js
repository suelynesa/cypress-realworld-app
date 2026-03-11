Cypress.Commands.add('login', (username, password) => {

  cy.visit('/signin')

  cy.get('[name="username"]').type(username)
  cy.get('[name="password"]').type(password)

  cy.get('[data-test="signin-submit"]').click()

  cy.get('[data-test="sidenav-user-full-name"]').should('be.visible')

})