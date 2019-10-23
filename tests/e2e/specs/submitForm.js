/// <reference types="Cypress" />

describe('any form', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Members').click();
  });

  it('contextual information can be displayed', () => {
    cy.get('h1').contains('Members');
  });
});
