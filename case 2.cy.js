describe('Login ke orangeohrm', () => {
  it('login gagal dengan password salah', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('wrongpass')

    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/images/ohrm_logo.png').as('ohrm_logopng')

    cy.get('button[type="submit"]').click()

    cy.wait('@ohrm_logopng').its('response.statusCode').should('eq',200)

    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials')
     })
})