import usernamesalah1 from "../support/POM/usernamesalah1"
import dataPom1 from"../fixtures/datapom1.json"
describe('Login ke ohrm orange', () => {
  it('login gagal dengan username salah', () => {
    //cy.visit('https://opensource-demo.orangehrmlive.com/');
    usernamesalah1.visit()

    // cy.get('[name="username"]').type('wronguser');
    usernamesalah1.inputUsername()

    // cy.get('[name="password"]').type('admin123');
    usernamesalah1.inputPassword()

    //cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/images/ohrm_branding.png?v=1721393199309').as('ohrm_branding');

    //cy.get('[type="submit"]').click();
    usernamesalah1.clickloginBtn()

    //cy.wait('@ohrm_branding').its('response.statusCode').should('be.oneOf', [200, 304]);

    //cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
    usernamesalah1.assertionusernamesalah()
    
  });
});
