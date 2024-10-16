describe('Long Password - Registration', () => {
    it('should display error for password longer than 128 characters', () => {
      cy.visit('/register');
      cy.get('#register-email').type('test@test.com');
      cy.get('#register-password').type('A'.repeat(129)); // Zbyt długie hasło
      cy.get('#register-submit').click();
    
      // Sprawdzenie komunikatu o błędzie dla zbyt długiego hasła
      cy.get('#register-error').should('contain', 'Hasło nie może mieć więcej niż 128 znaków.');
    });
  });
  