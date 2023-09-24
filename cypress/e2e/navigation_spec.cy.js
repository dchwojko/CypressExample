describe('template spec', () => {
  var url = 'https://example.cypress.io/commands/navigation'
  beforeEach(() => {
    cy.visit(url)
  })
  it('should go back or forward in the browser\'s history using the .go() command', () => {
    cy.location('pathname')
      .should('include', 'navigation')
    cy.go('back')
    cy.location('pathname')
      .should('not.include', 'navigation')

    cy.go('forward')
    cy.location('pathname')
      .should('include', 'navigation')

    // clicking back
    cy.go(-1)
    cy.location('pathname')
      .should('not.include', 'navigation')

    // clicking forward
    cy.go(1)
    cy.location('pathname')
      .should('include', 'navigation')
  })
  it('should reload the page using the .reload() command', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })
  it('should visit a remote page using the .visit() command', () => {
    cy.visit('https://example.cypress.io/commands/navigation', {
      timeout: 50000, // increase total time for visit to resolve
      onBeforeLoad: function(contentWindow) {
        // contentWindow is the remote page's window object
        console.log('cy.visit() : onBeforeLoad()')
      },
      onLoad: function(contentWindow) {
        // contentWindoiw is the remote page's window object
        console.log('cy.visit() : onLoad()')
      }
    })
  })
})