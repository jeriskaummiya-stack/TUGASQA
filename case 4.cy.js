describe('Login ke ohrm orange', () => {
  it('login gagal dengan username salah', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    cy.get('[name="username"]').type('wronguser');
    cy.get('[name="password"]').type('admin123');

    cy.intercept('GET', '**/core/i18n/messages').as('messages');

    cy.get('[type="submit"]').click();

    cy.wait('@messages').its('response.statusCode').should('eq',304);

    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
  });
});
