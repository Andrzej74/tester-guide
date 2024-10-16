describe('Short Password - Registration', () => {
    it('should display error for password shorter than 8 characters', () => {
      cy.visit('/register');
      cy.get('#register-email').type('test@test.com');
      cy.get('#register-password').type('short'); 
      cy.get('#register-submit').click();
    
      cy.get('#register-error').should('contain', 'Hasło musi mieć co najmniej 8 znaków.');
    });
  });
  