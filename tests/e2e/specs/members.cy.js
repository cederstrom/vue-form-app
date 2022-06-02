/// <reference types="Cypress" />

describe("Member page", () => {
  beforeEach(() => {
    cy.intercept("/members",
      [{ name: "Kevin", age: 12 }, { name: "Cortez", age: 56 }]
    );
    cy.visit("/");
    cy.contains("Members").click();
  });

  it("contains a header", () => {
    cy.get("h1").contains("Members");
  })

  it("contains some initial data", () => {
    cy.get('[data-testid="members"] tr:first').contains("Kevin");
    cy.get('[data-testid="members"] tr:first').contains("12");

    cy.get('[data-testid="members"] tr:nth-child(2)').contains("Cortez");
    cy.get('[data-testid="members"] tr:nth-child(2)').contains("56");
  });
});
