describe('Login ke Swag Labs', () => {
  it('login gagal dengan password salah', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('wrongpass')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials')
     })
})