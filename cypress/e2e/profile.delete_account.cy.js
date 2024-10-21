describe('Profile - Delete Account', () => {
    it('should delete the user account and redirect to home, ensuring the account is no longer available', () => {
      cy.visit('/login');
  
      cy.get('#login-email').type('test@test.com');
      cy.get('#login-password').type('Test1234');
      cy.get('#login-submit').click();
  
      cy.url().should('include', '/profile');
      cy.contains('Zalogowany jako test@test.com');
  
      cy.get('#delete-account-button').click();
  
      cy.url().should('eq', 'http://localhost:3000/');
  
      cy.visit('/login');
      cy.get('#login-email').type('test@test.com');
      cy.get('#login-password').type('Test1234');
      cy.get('#login-submit').click();
  
      cy.get('#login-error').should('contain', 'Błąd logowania');
    });
  });
  