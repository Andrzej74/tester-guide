describe('Profile - Logout', () => {
    it('should logout the user and redirect to home, but keep the user in the database', () => {
      cy.visit('/login');
  
      cy.get('#login-email').type('test@test.com');
      cy.get('#login-password').type('Test1234');
      cy.get('#login-submit').click();
  
      cy.url().should('include', '/profile');
      cy.contains('Zalogowany jako: test@test.com');
  
      cy.get('#logout-button').click();

      cy.url().should('eq', 'http://localhost:3000/'); 
  
      cy.visit('/login');
      cy.get('#login-email').type('test@test.com');
      cy.get('#login-password').type('Test1234');
      cy.get('#login-submit').click();
  
      cy.url().should('include', '/profile');
      cy.contains('Zalogowany jako: test@test.com');
    });
  });
  