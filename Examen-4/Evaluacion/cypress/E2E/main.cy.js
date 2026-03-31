describe('Comprobación de elementos', () => {
  it('Prueba de existencia de elementos', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('#email');
    cy.get('#password');
    cy.get('#repeat-password');
  })
  it('Comprobación en caso que la contraseña falle 2 veces aparezca mensaje y se oculte botón', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('#email').type('email@example.com');
    cy.wait(1000);
    cy.get('#password').type('111');
    cy.wait(1000);
    cy.get('#repeat-password').type('222');
    cy.get('#password-message').should('contain', 'Las contraseñas no coinciden');
    cy.get('#send-btn').should('not.be.visible');
  })
  it('En caso de que coincidan las 2 contraseñas', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('#email').type('email@example.com');
    cy.wait(1000);
    cy.get('#password').type('111');
    cy.wait(1000);
    cy.get('#repeat-password').type('111');
    cy.wait(1000);
    cy.get('#password-message').should('not.be.visible');
    cy.get('button#send-btn').click();
  })
})