describe('Login ke orange HRM ', () => {
  it('Login gagal dengan username kosong', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-input-group__message').should('contain', 'Required')
         })
})
