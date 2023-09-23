describe('template spec', () => {
  var url = 'https://example.cypress.io'
  beforeEach(() => {
      cy.visit(url)
    })
  it('should pass', () => {
    cy.title().should('include', 'Kitchen Sink')
  })
})