import dashboard from "../support/POM/dashboard";
import dataPom from"../fixtures/datapom.json"
describe('masuk ke directory ', () => {
   it('masuk ke directory melalui menu dashboard', () => {
    //cy.visit('https://opensource-demo.orangehrmlive.com/');
    dashboard.visit()

    //cy.get('[name="username"]').type('Admin');
    dashboard.inputUsername()
    
    //cy.get('[name="password"]').type('admin123');
    dashboard.inputPassword()
    
    //cy.get('[type="submit"]').click();
    dashboard.clickloginBtn()

    //cy.url().should('include', '/dashboard')
    //cy.contains('Dashboard').should('be.visible')
    dashboard.assertionlogin()

    //cy.get('.oxd-icon.bi-list.oxd-topbar-header-hamburger').click({ force: true });
    dashboard.clickmenuitem()

    //cy.contains('.oxd-main-menu-item', 'Directory').click({ force: true });
    dashboard.clickbtndirectory()

    //cy.contains('Directory').should('be.visible');
    dashboard.assertiondirectory()
    });
});