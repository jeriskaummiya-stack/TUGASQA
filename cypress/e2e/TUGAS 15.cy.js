describe('Sanbercode Login Test', () => {
  it('Should login with email and password', () => {
    cy.visit('https://sanbercode.com/login')
    cy.get('input.form-control').type('Jejeng123')
    cy.get('#btnKirim').click()
    cy.contains('Masuk Kelas').should('be.visible').click()
    cy.contains('Tugas & Quiz').should('be.visible').click()
    cy.contains('Logout').should('be.visible').click();
     })
})