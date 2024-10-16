describe('Password Missing Number - Registration', () => {
    it('should display error for password missing a number', () => {
      cy.visit('/register');
      cy.get('#register-email').type('test@test.com');
      cy.get('#register-password').type('TestPassword'); // Brak cyfry
      cy.get('#register-submit').click();
    
      // Sprawdzenie komunikatu o błędzie dla braku cyfry
      cy.get('#register-error').should('contain', 'Hasło musi zawierać co najmniej jedną cyfrę.');
    });
  });
  