/// <reference types="cypress" />


context('HyttaRadar', () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("Add new hytta to the list", () => {
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

    cy.wait(1500);

    cy.get(".toast-message").should('not.exist');

    cy.get(".new-item")
      .should('be.visible')
  });

  it("Check that the new item was successfully added", () => {
      cy.get(".new-item .db-header")
      .contains('Hytta De Lux')
      cy.get(".new-item .db-address")
        .contains('The Answer street 42')
      cy.get(".new-item .db-description")
        .contains('This is a trully amazing place to spend the best days of your busy life ...')
  })
});