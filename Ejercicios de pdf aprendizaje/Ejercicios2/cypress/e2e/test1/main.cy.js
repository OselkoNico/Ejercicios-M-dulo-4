describe('Sintaxis uso Crypress', () => {
    it('Test comprobación página inicio', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.get('h1').should('have.text', '¡Hola mundo!');
    })
});