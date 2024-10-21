describe('User Registration and Further Actions', () => {
  it('should register a new and delete the account', () => {
    // Rejestracja użytkownika
    cy.visit('/register');
    cy.get('#register-email').type('testa@test.com');
    cy.get('#register-password').type('Test1234');
    cy.get('#register-submit').click();

    // Sprawdzenie przekierowania na stronę profilu
    cy.url({ timeout: 1000 }).should('include', '/profile');
    cy.contains('Zalogowany jako: testa@test.com');

    // Usunięcie konta
    cy.get('#delete-account-button').click();
    cy.url().should('eq', 'http://localhost:3000/');

    // Próba ponownego logowania - konto powinno być usunięte
    cy.visit('/login');
    cy.get('#login-email').type('testa@test.com');
    cy.get('#login-password').type('Test1234');
    cy.get('#login-submit').click();
    cy.get('#login-error').should('contain', 'Błąd logowania');
  });
});

  