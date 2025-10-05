describe('Login ke ohrm orange', () => {
  it('login gagal dengan username salah', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    cy.get('[name="username"]').type('wronguser');
    cy.get('[name="password"]').type('admin123');

    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/images/ohrm_branding.png?v=1721393199309').as('ohrm_branding');

    cy.get('[type="submit"]').click();

    cy.wait('@ohrm_branding').its('response.statusCode').should('be.oneOf', [200, 304]);

    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
  });
});
