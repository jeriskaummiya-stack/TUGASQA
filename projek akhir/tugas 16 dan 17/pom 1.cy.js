import loginpom from "../support/POM/loginpom"
import dataPom from"../fixtures/datapom.json"
describe('Login ke OrangeHRM ', () => {
  it('Berhasil login dengan akun valid', () => {
    //cy.visit('https://opensource-demo.orangehrmlive.com/')
    loginpom.visit()

    //cy.get('[name="username"]').type('Admin')
    loginpom.inputUsername()
    
    //cy.get('[name="password"]').type('admin123')
    loginpom.inputPassword()
    
    //cy.get('[type="submit"]').click()
    loginpom.clickloginBtn()
    
    //cy.url().should('include', '/dashboard')
    //cy.contains('Dashboard').should('be.visible')
    loginpom.assertionlogin()
     })
})