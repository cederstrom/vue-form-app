/// <reference types="Cypress" />

describe('Member page', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '/members',
      response: [{ name: 'Kevin', age: 12 }, { name: 'Cortez', age: 56 }]
    })
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
