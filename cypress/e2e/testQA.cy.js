describe('spadame Login Test', () => {
  it('Should login with email and password', () => {
    cy.visit('https://spadame.pnp.ac.id/login/index.php')
    cy.get('#username').type('kala123@gmail.com')
    cy.get('#password').type('myPassword123')
    cy.get('#loginbtn').click()
  })
})