describe('Write / read Data to JSON / Text file', () => {
    
    it('should write data into JSON', () => {
        cy.writeFile('log.json', { name: "Mika", age: 25})
    })

    it('should write data to the text file', () => {
        cy.writeFile('log.txt', 'Hello World')
    })
})
