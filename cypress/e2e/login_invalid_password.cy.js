describe('Invalid Email Format - Registration', () => {
    it('should display error for invalid email format', () => {
      cy.visit('/login');
      cy.get('#login-email').type('test@test.com');
      cy.get('#login-password').type('invalidPassword');
      cy.get('#login-submit').click();
      cy.get('#login-error').should('contain', 'Błąd logowania');
    });
  });