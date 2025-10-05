describe('Login ke OrangeHRM ', () => {
  it('Berhasil login dengan akun valid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    
    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit').as('subunit');

    cy.get('button[type="submit"]').click();

    cy.wait('@subunit').its('response.statusCode').should('eq',200)

    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible')
     });
});