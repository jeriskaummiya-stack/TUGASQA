describe('Login ke OHRM Orange', () => {
  it('login gagal dengan password kosong', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('[name="username"]').type('Admin');

    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/dist/css/app.css?v=1721393199309').as('css');

    cy.get('[type="submit"]').click();

    cy.wait('@css').its('response.statusCode').should('eq',200);

    cy.get('.oxd-input-group__message').should('contain', 'Required');
     });
});