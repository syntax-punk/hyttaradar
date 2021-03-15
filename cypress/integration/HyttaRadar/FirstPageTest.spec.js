/// <reference types="cypress" />


context('HyttaRadar', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("check the page is loaded successfully", () => {
    cy.get(".more-button")
      .click();
    cy.get(".box-stack")
      .scrollTo("bottom")
  });

  it("check the data is more than 1 element", () => {
    cy.get(".box-stack")
      .find(".data-box")
      .its("length")
      .should("be.gte", 1);
  });

  it("add new hytta to the list", () => {
    cy.get(".add-new-button")
      .click();
    cy.get(".modal-screen")
      .should("have.class", "modal-active");
    
    cy.get("input[name='name']")
      .type("Hytta De Lux");

    cy.get("input[name='address']")
      .type("The Answer street 42");

    cy.get("input[name='price']")
      .type("7500");
    
    cy.get("textarea[name='description']")
      .type("This is a trully amazing place to spend the best days of your busy life ...");
    
    cy.get("button[type='submit']")
      .click();

    cy.get(".toast-message").should('be.visible');
  });
});