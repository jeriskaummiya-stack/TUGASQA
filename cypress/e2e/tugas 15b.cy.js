describe('Visit Google', () => {
  it('membuka halaman Google', () => {
    cy.visit('https://www.google.com/')
    cy.url().should('eq', 'https://www.google.com/')
    cy.get('input[name="q"]').should('be.visible')
  })
})