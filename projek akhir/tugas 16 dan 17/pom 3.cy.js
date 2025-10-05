import forgotpw from "../support/POM/forgotpw";
import dataPom from"../fixtures/datapom.json"
describe('Login ke OrangeHRM ', () => {
  it('login denga lupa password', () => {
    //cy.visit('https://opensource-demo.orangehrmlive.com/');
    forgotpw.visit()
    
    //cy.get('input[name="username"]').type('Admin');
    forgotpw.inputUsername()

    //cy.contains('Forgot your password?').click();
    forgotpw.clickForgotyoupassword()

    //cy.get('.oxd-text.oxd-text--h6.orangehrm-forgot-password-title').should('contain','Reset Password');
    forgotpw.assertionresetpw()
     });
});