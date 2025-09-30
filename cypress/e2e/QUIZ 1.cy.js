describe('Login ke OrangeHRM ', () => {
  it('Berhasil login dengan akun valid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');
    cy.get('[type="submit"]').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
     });
});
