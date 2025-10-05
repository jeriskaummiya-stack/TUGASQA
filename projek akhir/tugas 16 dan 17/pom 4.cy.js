import usernamesalah from "../support/POM/usernamesalah"
import dataPom from"../fixtures/datapom.json"
describe('Login ke orangeohrm', () => {
  it('login gagal dengan username salah', () => {
    //cy.visit('https://opensource-demo.orangehrmlive.com/');
    usernamesalah.visit()
    
    //cy.get('[name="username"]').type('lalaadmin');
    usernamesalah.inputUsername()
   
    //cy.get('[name="password"]').type('admin123')
    usernamesalah.inputPassword()

    //cy.get('[type="submit"]').click();
    usernamesalah.clickloginBtn()

    //cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
    usernamesalah.assertionusernamesalah()

     });
});