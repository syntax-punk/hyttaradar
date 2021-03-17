/// <reference types="cypress" />

function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  )
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  )

  cy.task('table', violationData)
}

context('HyttaRadar A11y Test', () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.injectAxe()
  });

  it('Check for any detectable a11y violations on page load', () => {
    // Test the page at initial load
    cy.checkA11y('.box-stack', null, terminalLog)
  })
});