describe('template spec', () => {
  var url = 'https://example.cypress.io/commands/actions'
  var email = 'fake@email.com'
  beforeEach(() => {
    cy.visit(url)
  })
  it('should type into a DOM element using the .type() command', () => {
    cy.get('.action-email')
      .type(email)
      .should('have.value', email)
  })
  it('should type with special character sequence', () => {
    cy.get('.action-email')
      .type(email)
      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      .type('{del}{selectall}{backspace}')
      .should('have.value','')
  })
  it('should slow type', () => {
    cy.get('.action-email')
      .type(email, { delay: 100 })
      .should('have.value', email)
  })
  it('should focus on a DOM element using the .focus() command', () => {
    cy.get('.action-focus').focus()
      .should('have.class', 'focus')
      .prev().should('have.attr', 'style', 'color: orange;')
  })
  it('should blur on a DOM element using the blur() command', () => {
    cy.get('.action-blur')
      .type('About to blur').blur()
      .should('have.class', 'error')
      .prev()
      .should('have.attr', 'style', 'color: red;')
  })
  it('should clear on a DOM element using the .clear() comamand', () => {
    var str = 'Clear this text'
    cy.get('.action-clear')
      .type(str)
      .should('have.value', str)
      .clear()
      .should('have.value', '')
  })
  it('should submit a form using the cy.submit() command', () => {
    cy.get('.action-form')
      .find('[type="text"]')
      .type('HALFOFF')
    cy.get('.action-form').submit()
      .next()
      .should('contain', 'Your form has been submitted!')
  })
  it('should click a DOM element using the .click() command', () => {
    cy.get('.action-btn')
      .click()
    // clicking in the center of the element is the default
    cy.get('#action-canvas').click()

    cy.get('#action-canvas').click('topLeft')
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('topRight')
    cy.get('#action-canvas').click('left')
    cy.get('#action-canvas').click('right')
    cy.get('#action-canvas').click('bottomLeft')
    cy.get('#action-canvas').click('bottom')
    cy.get('#action-canvas').click('bottomRight')

    // click multiple elements by passing multiple: true
    cy.get('.action-labels>.label').click({ multiple: true })
  })
  it('should double click a DOM element using the .dblClick() command', () => {
    cy.get('.action-div').dblclick().should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')
  })
  it('should right click a DOM element using the rightclick() command', () => {
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible')
  })
  it('should check a checkbox or radio using the .check() commmand', () => {
    // By default, .check() will check all
    // matching checkbox or radio elements in succession, one after another
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
      .check().should('be.checked')

    cy.get('.action-radios [type="radio"]').not('[disabled]')
      .check().should('be.checked')

    // .check() accepts a value argument
    cy.get('.action-radios [type="radio"]')
      .check('radio1').should('be.checked')

    // .check() accepts an array of values
    cy.get('.action-multiple-checkboxes [type="checkbox"]')
      .check(['checkbox1', 'checkbox2']).should('be.checked')

    // Ignore error checking prior to checking
    cy.get('.action-checkboxes [disabled]')
      .check({ force: true }).should('be.checked')

    cy.get('.action-radios [type="radio"]')
      .check('radio3', { force: true }).should('be.checked')
  })
  it('should uncheck a checkbox or radio using the .uncheck() command', () => {
    // By default, .uncheck() will uncheck all matching
    // checkbox elements in succession, one after another
    cy.get('.action-check [type="checkbox"]')
      .not('[disabled]')
      .uncheck()
      .should('not.be.checked')

    // .uncheck() accepts a value argument
    cy.get('.action-check [type="checkbox"]')
      .check('checkbox1')
      .uncheck('checkbox1')
      .should('not.be.checked')

    // .uncheck() accepts an array of values
    cy.get('.action-check [type="checkbox"]')
      .check(['checkbox1', 'checkbox3'])
      .uncheck(['checkbox1', 'checkbox3'])
      .should('not.be.checked')

    // Ignore error checking prior to unchecking
    cy.get('.action-check [disabled]')
      .uncheck({ force: true })
      .should('not.be.checked')
  })
  it('should select an option in a select element using the .select() command', () => {
    // at first, no option should be selected
    cy.get('.action-select')
      .should('have.value', '--Select a fruit--')

    // Select option(s) with matching text content
    cy.get('.action-select')
      .select('apples')
    // confirm the apples were selected
    // note that each value starts with "fr-" in our HTML
    cy.get('.action-select')
      .should('have.value', 'fr-apples')

    cy.get('.action-select-multiple')
      .select(['apples', 'oranges', 'bananas'])
    // when getting multiple values, invoke "val" method first
      .invoke('val')
      .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])

    // Select option(s) with matching value
    cy.get('.action-select').select('fr-bananas')
    // can attach an assertion right away to the element
      .should('have.value', 'fr-bananas')

    cy.get('.action-select-multiple')
      .select(['fr-apples', 'fr-oranges', 'fr-bananas'])
      .invoke('val')
      .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
    // assert the selected values include oranges
    cy.get('.action-select-multiple')
      .invoke('val').should('include', 'fr-oranges')
  })
  it('should scroll an element into view using the .scrollIntoView() command', () => {
    cy.get('#scroll-horizontal button')
      .should('not.be.visible')

    // scroll the button into view, as if the user had scrolled
    cy.get('#scroll-horizontal button').scrollIntoView()
      .should('be.visible')

    cy.get('#scroll-vertical button')
      .should('not.be.visible')

    // Cypress handles the scroll direction needed
    cy.get('#scroll-vertical button').scrollIntoView()
      .should('be.visible')

    cy.get('#scroll-both button')
      .should('not.be.visible')

    // Cypress knows to scroll to the right and down
    cy.get('#scroll-both button').scrollIntoView()
      .should('be.visible')
  })
  it('should scroll the window or a scrollable element to a specific position using the cy.scrollTo() command', () => {
    // if you chain .scrollTo() off of cy, we will
    // scroll the entire window
    cy.scrollTo('bottom')

    cy.get('#scrollable-horizontal')
      .scrollTo('right')

    // or you can scroll to a specific coordinate:
    // (x axis, y axis) in pixels
    cy.get('#scrollable-vertical')
      .scrollTo(250, 250)

    // or you can scroll to a specific percentage
    // of the (width, height) of the element
    cy.get('#scrollable-both')
      .scrollTo('75%', '25%')

    // control the easing of the scroll (default is 'swing')
    cy.get('#scrollable-vertical')
      .scrollTo('center', { easing: 'linear' })

    // control the duration of the scroll (in ms)
    cy.get('#scrollable-both')
      .scrollTo('center', { duration: 2000 })
  })
  it('should trigger an event on a DOM element using the .trigger() command', () => {
    cy.get('.trigger-input-range')
      .invoke('val', 25)
      .trigger('change')
      .get('input[type=range]')
      .siblings('p')
      .should('have.text', '25')
  })
})