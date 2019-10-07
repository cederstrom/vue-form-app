/// <reference types="Cypress" />

describe('any form', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Submit form').click();
  });

  it('contextual information can be displayed', () => {
    cy.get('h1').contains('Submit form');
  });
});
