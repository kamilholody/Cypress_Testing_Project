describe('New Payee Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('userE2E').then(user => {
            const username = user.id
            const password = user.pwd
            cy.loginE2E(username, password)
        })
    })

    it('should add new payee to the list', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('Name')
        cy.get('#np_new_payee_address').type('Address')
        cy.get('#np_new_payee_account').type('1234567890')
        cy.get('#np_new_payee_details').type('Detail')
        cy.get('#add_new_payee').click()

    })

    it('should show success message', () => {
        cy.get('#alert_content').should('be.visible').and('contain', 'The new payee Name was successfully created.')
    })
})
