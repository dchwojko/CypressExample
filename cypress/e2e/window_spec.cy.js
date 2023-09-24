describe('template spec', () => {
  var url = 'https://example.cypress.io/commands/window'
  beforeEach(() => {
    cy.visit(url)
  })
  it('should get the global window object using the cy.window() command', () => {
    cy.window()
      .should('have.property', 'top')
  })
  it('should get the document object using the cy.document()', () => {
    cy.document()
      .should('have.property', 'charset')
      .and('eq', 'UTF-8')
  })
  it('should get title using the .title() command', () => {
    cy.title()
      .should('eq', 'Cypress.io: Kitchen Sink')
  })
})