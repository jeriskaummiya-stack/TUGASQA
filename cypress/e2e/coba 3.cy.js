describe('karirlinkLogin Test', () => {
  it('Should login with email and password', () => {
    cy.visit('https://portal.karirlink.id/login/company')
    cy.get('#username').type('kala123@gmail.com')
    cy.get('#password').type('Password123')
    cy.contains('button', 'Masuk').click()
  })
})