// https://docs.cypress.io/api/introduction/api.html

describe('Start page', () => {
  it('shall contain a welcoming header', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome');
  });
});
