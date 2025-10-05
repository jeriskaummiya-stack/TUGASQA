import pwsalah from "../support/POM/pwsalah"
import dataPom from"../fixtures/datapom.json"
describe('Login ke orangeohrm', () => {
  it('login gagal dengan password salah', () => {
    //cy.visit('https://opensource-demo.orangehrmlive.com/');
    pwsalah.visit()
    
    //cy.get('[name="username"]').type('Admin');
    pwsalah.inputUsername()
   
    //cy.get('[name="password"]').type('wrongpass')
    pwsalah.inputPassword()

    //cy.get('[type="submit"]').click();
    pwsalah.clickloginBtn()

   // cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
    pwsalah.assertionpwsalah()

     });
});