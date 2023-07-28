Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('#user_remember_me').click()
    cy.contains('Sign in').click()
})

Cypress.Commands.add('loginE2E', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#login_form').should('be.visible')
    cy.get('#user_login').clear().type(username)
    cy.get('#user_password').clear().type(password)
    cy.contains('Sign in').click()
})