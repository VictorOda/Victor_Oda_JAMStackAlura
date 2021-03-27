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

// describe('/pages/app/modal', () => {
//   // it === test que estamos fazendo
//   it('preencha os campos e vá para a página /app/profile', () => {
//     cy.visit('/app/login/');

//     // preencher o input usuario
//     // document.querySelector('input[name="usuario"]')
//     cy.get('#formCadastro input[name="usuario"]').type('omariosouto');

//     // preencher o input senha
//     cy.get('#formCadastro input[name="senha"]').type('senhasegura');

//     // clicar no botão de submit!
//     cy.get('#formCadastro button[type="submit"]').click();

//     // o que esperamos? ir para "/app/profile/"
//     cy.url().should('include', '/app/profile');
//   });
// });
