describe('Login form with real API', () => {
  it('logs in with correct credentials', () => {
    cy.visit('http://localhost:5500/index.html');
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('123');
    cy.get('form').submit();
    cy.get('#message').should('contain', 'Login success');
  });

  it('fails with wrong credentials', () => {
    cy.visit('http://localhost:5500/index.html');
    cy.get('#email').type('wrong@example.com');
    cy.get('#password').type('wrong');
    cy.get('form').submit();
    cy.get('#message').should('contain', 'Invalid credentials');
  });
});
