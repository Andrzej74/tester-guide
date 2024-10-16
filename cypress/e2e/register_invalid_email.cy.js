describe('Invalid Email Format - Registration', () => {
    it('should display error for invalid email format', () => {
      cy.visit('/register');
      cy.get('#register-email').type('invalidemail'); // Niepoprawny e-mail
      cy.get('#register-password').type('Test1234');
      cy.get('#register-submit').click();
    
      // Sprawdzenie, czy wyświetla się komunikat o błędnym formacie e-maila
      cy.get('#register-error').should('contain', 'Niepoprawny format adresu e-mail.');
    });
  });