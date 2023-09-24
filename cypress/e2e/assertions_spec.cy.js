describe('template spec', () => {
  var url = 'https://example.cypress.io/commands/assertions'
  beforeEach(() => {
    cy.visit(url)
  })
  describe('implicit assertions', () => {
    it('should make an assertion about the current subject using the .should() command', () => {
      cy.get('.assertion-table')
        .find('tbody tr:last')
        .should('have.class', 'success')
        .find('td')
        .first()
        .should('have.text', 'Column content')
        .should('contain', 'Column content')
        .should('have.html', 'Column content')
        .should('match', 'td')
        .invoke('text')
        .should('match', /column content/i)
      cy.get('.assertion-table')
        .find('tbody tr:last')
        .contains('td', /column content/i)
        .should('be.visible')
    })
    it('should chain multiple assertions together using the .and() command', () => {
      cy.get('.assertions-link')
        .should('have.class', 'active')
        .and('have.attr', 'href')
        .and('include', 'cypress.io')
    })
  })
  describe('explicit assertions', () => {
    it('should make a BDD assertion about a specified subject using expect', () => {
      expect(true).to.be.true
      const o = { foo: 'bar' }
      expect(o).to.equal(o)
      expect(o).to.deep.equal({ foo: 'bar' })
      expect('FooBar').to.match(/bar$/i)
    })
    it('should make a TDD assetion about a specified subject using assert', () => {
      const person = {
        name: 'Joe',
        age: 20,
      }
      assert.isObject(person, 'value is object')
    })
  })
})