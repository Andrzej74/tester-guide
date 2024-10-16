describe('Email Already In Use - Registration', () => {
    it('should display error for email already in use', () => {
      cy.visit('/register');
      cy.get('#register-email').type('test@test.com');
      cy.get('#register-password').type('Test1234');
      cy.get('#register-submit').click();
    
      cy.get('#register-error').should('contain', 'Konto z podanym emailem istnieje.');
    });
  });
  