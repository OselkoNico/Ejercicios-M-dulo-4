describe('Formulario usuarios', () => {
    it('Contiene los campos nombre, apellidos, email y fecha de nacimiento', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.get('[for="name"]').contains('Nombre');
        cy.get('[for="surname"]').contains('Apellidos');
        cy.get('[for="email"]').contains('Correo electrónico');
        cy.get('[for="birthDate"]').contains('Fecha de nacimiento');
    })
    it('Pueden completarse los campos nombre, apellidos, email y fecha de nacimiento', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
 cy.get('#name').type('Juan');
 cy.wait(1000);
 cy.get('#surname').type('López');
 cy.wait(1000);
 cy.get('#email').type('juan@gmail.com');
 cy.wait(1000);
 cy.get('#birthDate').type('1986-02-23');
 })
})