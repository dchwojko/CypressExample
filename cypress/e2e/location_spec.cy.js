describe('template spec', () => {
  var url = 'https://example.cypress.io/commands/location'
  beforeEach(() => {
    cy.visit(url)
  })
  it('should get the current URL hash using the .hash() command', () => {
    cy.hash()
      .should('be.empty')
    console.log(cy.hash())
  })
  it('should get the window.location using the .location() command', () => {
    cy.location()
      .should((location) => {
        expect(location.hash).to.be.empty
        expect(location.href).to.eq('https://example.cypress.io/commands/location')
        expect(location.host).to.eq('example.cypress.io')
        expect(location.hostname).to.eq('example.cypress.io')
        expect(location.origin).to.eq('https://example.cypress.io')
        expect(location.pathname).to.eq('/commands/location')
        expect(location.port).to.eq('')
        expect(location.protocol).to.eq('https:')
        expect(location.search).to.be.empty
      })
  })
  it('should get the current URL using teh .url() command', () => {
    cy.url()
      .should('eq', 'https://example.cypress.io/commands/location')
  })
})