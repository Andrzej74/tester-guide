describe('User Registration and Further Actions', () => {
  let testData;

  before(() => {
    // Wczytaj dane testowe przed uruchomieniem testów
    cy.fixture('testData').then((data) => {
      testData = data[0];
    });
  });

  it('should register a new user and delete the account', () => {
    // Rejestracja użytkownika
    cy.visit('/register');
    cy.get('#register-email').type(testData.email);
    cy.get('#register-password').type(testData.password);
    cy.get('#register-submit').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard');
    cy.get('#profile-button').click();

    // Usunięcie konta
    cy.url().should('include', '/profile');
    cy.get('#delete-account-button').click();
    cy.url().should('eq', 'http://localhost:3000/');

    // Próba ponownego logowania - konto powinno być usunięte
    cy.visit('/login');
    cy.get('#login-email').type(testData.email);
    cy.get('#login-password').type(testData.password);
    cy.get('#login-submit').click();
    cy.get('#login-error').should('contain', 'Błąd logowania');
  });
});
