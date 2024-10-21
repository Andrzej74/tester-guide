describe('Login - Empty Password Field', () => {
    it('should display a generic error when the password field is empty and a valid email is entered', () => {
      cy.visit('/login');
      cy.get('#login-email').type('test@test.com');
      cy.get('#login-submit').click();
      cy.get('#login-error').should('contain', 'Błąd logowania');
    });
  });
  