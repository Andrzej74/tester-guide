describe('Invalid Email - Login', () => {
    it('should display error for invalid email format', () => {
      cy.visit('/login');
      cy.get('#login-email').type('invalidemail');
      cy.get('#login-password').type('Test1234');
      cy.get('#login-submit').click();
      cy.get('#login-error').should('contain', 'Błąd logowania');
    });
  });