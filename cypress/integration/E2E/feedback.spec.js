describe('Feedback Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#feedback').click()
    })

    it('should load feedback form', () => {
        cy.get('form').should('be.visible')
        cy.url().should('include', 'feedback.html')
        cy.get('h3').should('contain', 'Feedback')
    })

    it('should fill feedback form', () => {
        cy.get('#name').clear().type("Kamil")
        cy.get('#email').clear().type('kamilholody@test.com')
        cy.get('#subject').clear().type('Test')
        cy.get('#comment').clear().type('Some text test')

    })

    it('should submit feedback form', () => {
        cy.get('.btn-signin').click()
    })

    it('should display feedback message', () => {
        cy.url().should('include', 'sendFeedback.html')
        cy.get('h3').should('contain', 'Feedback')
    })
})
