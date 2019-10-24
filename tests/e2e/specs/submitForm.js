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

  it('can add a new member', () => {
    cy.get('[testid="input-name"]').type('Andrea');
    cy.get('[testid="input-age"]').type('31');
    cy.get('[testid="button-submit"]').click();

    cy.get('[testid="members"] tr:nth-child(3)').contains('Andrea');
    cy.get('[testid="members"] tr:nth-child(3)').contains('31');
  });
});
