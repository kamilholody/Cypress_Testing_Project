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
})
