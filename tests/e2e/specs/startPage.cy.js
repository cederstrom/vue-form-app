/// <reference types="Cypress" />

describe('Start page', () => {
  it('contains a welcoming header', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome');
  });
});
