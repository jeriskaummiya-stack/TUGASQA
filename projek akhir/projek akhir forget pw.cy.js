describe('Login ke OrangeHRM ', () => {
  it('login denga lupa password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('[name="username"]').type('Admin');
    
    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages');

    cy.contains('Forgot your password?').click();

    cy.wait('@messages').its('response.statusCode').should('eq',304);

    cy.get('.oxd-text.oxd-text--h6.orangehrm-forgot-password-title').should('contain','Reset Password');
    cy.get('input[name="username"]').type('Admin');
    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages');
    cy.get('[type="submit"]').click();
    cy.wait('@messages').its('response.statusCode').should('eq',304);
    cy.get('.oxd-text.oxd-text--h6.orangehrm-forgot-password-title').should('contain', 'Reset Password link sent successfully');
  });
});