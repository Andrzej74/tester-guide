describe('Login - Empty Email Field', () => {
    it('should display a generic error when the email field is empty and a valid password is entered', () => {
      cy.visit('/login');
      cy.get('#login-password').type('Test1234');
      cy.get('#login-submit').click();
      cy.get('#login-error').should('contain', 'Błąd logowania');
    });
  });
  