describe('Login ke Swag Labs', () => {
  it('login gagal dengan username salah', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('input[name="username"]').type('wronguser')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials')
  })
})
