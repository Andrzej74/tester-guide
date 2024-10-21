describe('Empty password - Registration', () => {
    it('should display error for email already in use', () => {
      cy.visit('/register');
      cy.get('#register-email').type('test@test.com');
      cy.get('#register-password').type('');
      cy.get('#register-submit').click();
    
      cy.get('#register-error').should('contain', 'Hasło musi mieć co najmniej 8 znaków.');
    });
  });