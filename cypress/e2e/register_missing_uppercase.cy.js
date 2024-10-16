describe('Password Missing Uppercase - Registration', () => {
  it('should display error for password missing an uppercase letter', () => {
    cy.visit('/register');
    cy.get('#register-email').type('test@test.com');
    cy.get('#register-password').type('test1234'); // Brak wielkiej litery
    cy.get('#register-submit').click();
  
    // Sprawdzenie komunikatu o błędzie dla braku wielkiej litery
    cy.get('#register-error').should('contain', 'Hasło musi zawierać co najmniej jedną wielką literę.');
  });
});
