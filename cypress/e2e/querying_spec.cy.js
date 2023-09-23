describe('template spec', () => {
  var url = 'https://example.cypress.io/commands/querying'
  beforeEach(() => {
      cy.visit(url)
    })
  describe('get examples', () => {
      it('should find button by id', () => {
        cy.get('#query-btn').should('contain', 'Button')
      })
      it('should find button by class', () => {
        cy.get('.query-btn').should('contain', 'Button')
      })
      it('should find button by jquery selection', () => {
        cy.get('#querying .well>button:first').should('contain', 'Button')
      })
      it('should find elements by data attribute', () => {
        cy.get('[data-test-id="test-example"]').should('have.class', 'example')
      })
      it('should find element by id and attribute', () => {
        cy.get('[data-test-id="test-example"]')
          .invoke('attr', 'data-test-id')
          .should('equal', 'test-example')
      })
      it('should find element by id and class', () => {
        cy.get('[data-test-id="test-example"]')
          .invoke('css', 'position')
          .should('equal', 'static')
      })
      it('should be able to chain assertions', () => {
        cy.get('[data-test-id="test-example"]')
          .should('have.attr','data-test-id','test-example')
          .and('have.css','position','static')
      })
  })
  describe('contains examples', () => {
    it('should find elements by their content (class)', () => {
      cy.get('.query-list')
        .contains('bananas').should('have.class', 'third')
    })
    it('should find element using regexp within contains', () => {
      cy.get('.query-list')
        .contains(/^b\w+/).should('have.class', 'third')
    })
    it('should find elements by their content (class) [another example]', () => {
      cy.get('.query-list')
        .contains('apples').should('have.class', 'first')
    })
    it('should find element by passing selector to contains', () => {
      cy.get('#querying')
        .contains('ul', 'oranges')
        .should('have.class', 'query-list')
    })
    it('should find button by name', () => {
      cy.get('.query-button')
        .contains('Save Form')
        .should('have.class', 'btn')
    })
  })
  describe('within examples', () => {
    it('should find elements within a specific DOM element', () => {
      cy.get('.query-form').within(() => {
        cy.get('input:first').should('have.attr', 'placeholder', 'Email')
        cy.get('input:last').should('have.attr', 'placeholder', 'Password')
      })
    })
  })
  describe('root examples', () => {
    it('should get the default html root', () => {
      cy.root().should('match', 'html')
    })
    it('should get root for element', () => {
      // get element by class
      cy.get('.query-ul').within(() => {
        // in this within, root is now the ul DOM element
        cy.root().should('have.class', 'query-ul')
      })
    })
  })
  describe('best practices', () => {
    it('should preferably get elements by dedicated data-cy or data-test attributes to CSS class names and element IDs', () => {
      cy.get('[data-cy=submit]').click()
    })
  })
})