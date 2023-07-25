describe('Write / read Data to JSON / Text file', () => {
    
    it('should write data into JSON', () => {
        cy.writeFile('log.json', { name: "Mika", age: 25})
    })

    it('should write data to the text file', () => {
        cy.writeFile('log.txt', 'Hello World')
    })

    it('should read and verify data form JSON file', () => {
        cy.readFile('log.json').its('age').should('eq', 25)
    })

    it('should read and verify data from the texst file', () => {
        cy.readFile('log.txt').should('eq', 'Hello World')
    })

    it('should read and verify browser document content', () => {
        cy.visit('https://www.example.com')
        cy.wait(2000)
        cy.document()
            .its('contentType')
            .should('eq', 'text/html')

        cy.document()
            .should('have.property', 'charset')
            .and('eq', 'UTF-8')
    })
})
