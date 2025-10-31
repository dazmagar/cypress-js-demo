describe('Forms', () => {
  it('Login Form', () => {
  /*
  * Open the Forms page
  * Click on Login submenu
  * Fill the form:
  * Email: admin@admin.com
  * Password: admin123
  * Click on Submit button
  * Verify the success message
  */
    cy.visit('https://qa-automation-practice.netlify.app/')
    cy.contains('Forms').then(($el) => {
      cy.wrap($el).then(($element) => {
        if ($element.attr('aria-expanded') === 'false') {
          cy.wrap($element).click();
          cy.get('#homeSubmenu').should('be.visible');
        }
      });
    });
    cy.get('#login').click()
    cy.get('#content h2').should('have.text', 'Login Form')

    // cy.fixture('login-form.json').then(data => {
    //   cy.xpath('//input[@id="email"]').type(data.email)
    //   cy.xpath('//input[@id="password"]').type(data.password)
    // })
    // cy.contains('Submit').click()
    // cy.get('#message').should('contain', 'you have successfully logged in')
    cy.login('login-form.json')
  })
})