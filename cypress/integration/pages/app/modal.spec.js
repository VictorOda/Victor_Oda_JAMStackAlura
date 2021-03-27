/// <reference types="cypress" />

describe('/pages/app/modal', () => {
  it('preencha os campos do formulário entre em contato', () => {
    cy.visit('/');
    // clicar no botão de entre em contato
    cy.get('#contact #contactInfo button[name="contact"]').click();
    // preencher campo do nome
    cy.get('input[id="name"]').type('Victor Oda');
    // preencher campo do email
    cy.get('input[id="email"]').type('test@gmail.com');
    // preencher campo da mensagem
    cy.get('textarea[id="message"]').type('essa é uma mensagem de teste');
    // clicar no botão de enviar
    cy.get('button[id="contactBtn"]').click();
  });
});
