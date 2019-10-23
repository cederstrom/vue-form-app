/// <reference types="Cypress" />

describe('any form', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Members').click();
  });

  it('contains some initial data', () => {
    cy.get('h1').contains('Members');
    cy.get('[testid="members"] tr:first').contains('Kevin');
    cy.get('[testid="members"] tr:first').contains('12');
    cy.get('[testid="members"] tr:nth-child(2)').contains('Cortez');
    cy.get('[testid="members"] tr:nth-child(2)').contains('56');
  });
});
