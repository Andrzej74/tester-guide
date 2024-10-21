describe('Empty email - Registration', () => {
    it('should display error for email already in use', () => {
      cy.visit('/register');
      //cy.get('#register-email').type('');
      cy.get('#register-password').type('Test1234');
      cy.get('#register-submit').click();
    
      cy.get('#register-error').should('contain', 'Niepoprawny format adresu e-mail.');
    });
  });