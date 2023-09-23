describe('template spec', () => {
  var url = 'https://example.cypress.io/commands/traversal'
  beforeEach(() => {
    cy.visit(url)
  })
  it('should get children of DOM elements by using the .children() command', () => {
    cy.get('.traversal-breadcrumb')
      .children('.active')
      .should('contain', 'Data')
  })
  it('should get the closest ancestor DOM element by using the .closest() command', () => {
    cy.get('.traversal-badge')
      .closest('ul')
      .should('have.class', 'list-group')
  })
  it('should get a DOM element at a specific index using the .eq() command', () => {
    cy.get('.traversal-list>li')
      .eq(1)
      .should('contain', 'siamese')
  })
  it('should get DOM elements that match a specific selector using the .filter() command', () => {
    cy.get('.traversal-nav>li')
      .filter('.active')
      .should('contain', 'About')
  })
  it('should get descendant DOM elements of the selector using the .find() command', () => {
    cy.get('.traversal-pagination')
      .find('li')
      .find('a')
      .should('have.length', 7)
  })
  it('should get the first DOM element within elements using the .first() command', () => {
    cy.get('.traversal-table td')
      .first()
      .should('contain', '1')
  })
  it('should get the last DOM element within elements using the .last() command', () => {
    cy.get('.traversal-buttons .btn')
      .last()
      .should('contain', 'Submit')
  })
  it('should get the next sibling DOM element within elements using the .next() command', () => {
    cy.get('.traversal-ul')
      .contains('oranges')
      .next()
      .should('contain', 'bananas')
  })
  it('should get all of the next sibling DOM elements within elements using the .nextAll() command', () => {
    cy.get('.traversal-next-all')
    .contains('oranges')
    .nextAll()
    .should('have.length', 3)
  })
  it('should get all of the next sibling DOM elements within elements until another element using the .nextUntil() command', () => {
    cy.get('#veggies')
      .nextUntil('#nuts')
      .should('have.length', 3)
  })
  it('should remove DOM elements from the set of elements using the .not() command', () => {
    cy.get('.traversal-disabled .btn')
      .not('[disabled]')
      .should('not.contain', 'Disabled')
  })
  it('should get parent DOM of elements using the .parent() command', () => {
    cy.get('.traversal-mark')
      .parent()
      .should('contain', 'Morbi leo risus')
  })
  it('should get the parents DOM element of elements using the .parents() command', () => {
    cy.get('.traversal-cite')
      .parents()
      .should('match', 'blockquote')
  })
  it('should get parents DOM element of elements until other element  using the .parentsUntil() command', () => {
    cy.get('.clothes-nav')
      .find('.active')
      .parentsUntil('.clothes-nav')
      .should('have.length', 2)
  })
  it('should get the previous sibling DOM element within elements using the .prev() command', () => {
    cy.get('.birds')
      .find('.active')
      .prev()
      .should('contain', 'Lorikeets')
  })
  it('should get all previous sibling DOM elements within elements using the .prevAll() command', () => {
    cy.get('.fruits-list')
      .find('.third')
      .prevAll()
      .should('have.length', 2)
  })
  it('should get all previous sibling DOM elements within elements until other element using the .prevUntil() command', () => {
    cy.get('.foods-list')
      .find('#nuts')
      .prevUntil('#veggies')
      .should('have.length', 3)
  })
  it('should get all sibling DOM elements of elements using the .siblings() command', () => {
    cy.get('.traversal-pills .active')
      .siblings()
      .should('have.length', 2)
  })
})