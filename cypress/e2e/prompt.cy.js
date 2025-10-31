describe('Forms', () => {
  it.skip('Login Form', () => {
    cy.prompt([
    "Visit https://qa-automation-practice.netlify.app/",
    "Find the Forms submenu and click on it",
    "Find the Login Form and click on it",
    "Fill the form with the following data: {email: admin@admin.com, password: admin123}",
    "Click on the Submit button",
    "Verify the success message"
    ])
  })
})