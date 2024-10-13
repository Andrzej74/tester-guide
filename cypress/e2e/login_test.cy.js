describe('Login and Profile Test', () => {
  it('Should navigate to /login from home page and log in successfully', () => {
    // Visit home page
    cy.visit('/');

    // Find and click the login link (adjust the selector as needed)
    cy.get('a[href="/login"]').click();

    // Check if we are on the /login page
    cy.url().should('include', '/login');

    // Fill the login form with valid credentials
    cy.get('#login-email').type('test1@test.pl');
    cy.get('#login-password').type('Test1234');

    // Submit the form (adjust selector as needed)
    cy.get('#login-submit').click();

    // Visit home page
    cy.visit('/profile');

    // Verify that the correct message is displayed on the profile page
    cy.contains('Zalogowany jako: test1@test.pl').should('be.visible');
  });
});