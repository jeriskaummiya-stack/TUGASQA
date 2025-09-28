describe('Login ke Swag Labs', () => {
  it('login gagal dengan password kosong', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('input[name="username"]').type('Admin')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-input-group__message').should('contain', 'Required')
     })
})