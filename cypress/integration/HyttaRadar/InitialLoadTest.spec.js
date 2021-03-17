/// <reference types="cypress" />


context('HyttaRadar Page Usage Test', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('Check all APIs are up', () => {
    cy.request("http://localhost:9200/cabins")
      .should((response) => {
        expect(response.body).to.have.length.least(6);
      });
    
    cy.request("http://localhost:9200/users")
      .should((response) => {
      expect(response.body).to.have.length.least(1);
    });

    cy.request("http://localhost:9200/reservations")
    .should((response) => {
      expect(response.body).to.have.length.least(1);
    });
  });

  it("Check the data is more than 1 element", () => {
    cy.get(".box-stack")
      .find(".data-box")
      .its("length")
      .should("be.gte", 1);
  });

  it("Check the page is loaded successfully", () => {
    cy.get(".more-button")
      .click();

    cy.wait(1000);

    cy.get(".box-stack")
      .scrollTo('bottom');
  });
});