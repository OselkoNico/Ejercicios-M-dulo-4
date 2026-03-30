describe('Mostrar condiciones legales', () => {
const legalText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur consequatur perferendis tempora!';
const acceptMessage = 'Las condiciones legales fueron aceptadas';
    it('Al hacer click, muestra las condiciones', () => {
        cs.visit('http://127.0.0.1:5500/Ejercicio2/index.html')
        cy.get('#show-legal').click();
        cy.wait(1000);
        cy.get('#legal-text').contains(legalText);
        cy.wait(1000);
    })
    it('Al pulsar el botón Acepto las condiciones legales, se muestra el mensaje', () => {
        cy.get('#accept-legal').click();
        cy.wait(1000);
        cy.get('#accept-message').contains(acceptMessage);
    })
})