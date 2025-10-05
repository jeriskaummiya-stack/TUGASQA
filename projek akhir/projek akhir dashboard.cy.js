describe('masuk ke directory ', () => {
   it('masuk ke directory melalui menu dashboard', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('[name="username"]').type('admin');
    cy.get('[name="password"]').type('admin123');
    cy.get('[type="submit"]').click();
    cy.get('.oxd-icon.bi-list.oxd-topbar-header-hamburger').click({ force: true });
    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0').as('employees')
    cy.contains('.oxd-main-menu-item', 'Directory').click({ force: true });
    cy.wait('@employees').its('response.statusCode').should('eq', 200);
    cy.contains('Directory').should('be.visible');
    cy.get('.oxd-select-text').should('be.visible').eq(0).click();
    cy.get('.oxd-select-option').contains('Chief Financial Officer').click();
    cy.get('.oxd-select-text').eq(0).should('contain', 'Chief Financial Officer');
    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0&jobTitleId=2').as('jobTitle')
    cy.get('[type="submit"]').click();
    cy.wait('@jobTitle').its('response.statusCode').should('eq', 200);
    });
});