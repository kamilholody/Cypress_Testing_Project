describe('Cypress.$ Function', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Expose jQuery element in the current widnow', () => {
        const signInButton = Cypress.$('#signin_button')
        signInButton.trigger('click')
    })
})
