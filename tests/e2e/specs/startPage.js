// https://docs.cypress.io/api/introduction/api.html

describe('Start page', () => {
  it('contains a welcoming header', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome');
  });
});
