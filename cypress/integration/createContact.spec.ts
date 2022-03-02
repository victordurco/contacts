/* eslint-disable no-undef */
/// <reference types="cypress" />
afterEach(() => {
  cy.request({
    method: 'DELETE',
    url: 'https://pagaleve-contacts-api.herokuapp.com/contacts',
    body: {
      email: 'emailteste@gmail.com',
    },
    failOnStatusCode: false,
  });
});

describe('Create', () => {
  it('should create contact successfully', () => {
    cy.visit('http://localhost:3000/contato');
    cy.get('input[type=text]').type('Nome Teste');
    cy.get('input[type=tel]').type('(55) 55555-5555');
    cy.get('input[type=email]').type('emailteste@gmail.com');
    cy.contains('Salvar').click();
    cy.url().should('equal', 'http://localhost:3000/');
  });
});
