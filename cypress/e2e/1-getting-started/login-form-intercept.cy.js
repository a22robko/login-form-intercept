describe('Login form with mocked API', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500');
  });

  it('shows success message on valid login', () => {
    cy.intercept('POST', '/api/login', {
      statusCode: 200,
      body: { message: 'Login success' }  // ✅ Fixat
    }).as('loginSuccess');

    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password');
    cy.get('form').submit();

    cy.wait('@loginSuccess');
    cy.get('#message')
      .should('contain', 'Login success')
      .and('have.css', 'color', 'rgb(0, 128, 0)');
  });

  it('shows network error if server is unreachable', () => {
  cy.intercept('POST', '/api/login', { forceNetworkError: true }).as('networkError');

  cy.get('#email').type('any@example.com');
  cy.get('#password').type('pass');
  cy.get('form').submit();

  cy.wait('@networkError');
  cy.get('#message')
    .should('contain', 'Network error')
    .and('have.css', 'color', 'rgb(255, 0, 0)');
});


  it('shows network error if server is unreachable', () => {
    cy.intercept('POST', '/api/login', { forceNetworkError: true }).as('networkError');

    cy.get('#email').type('any@example.com');
    cy.get('#password').type('pass');
    cy.get('form').submit();

    cy.wait('@networkError');
    cy.get('#message')
      .should('contain', 'Network error')
      .and('have.css', 'color', 'rgb(255, 0, 0)');
  });
});
