describe('Login ke Swag Labs', () => {
  it('Berhasil login dengan akun valid', () => {
    cy.visit('https://www.saucedemo.com/')
     cy.get('#user-name').type('standard_user')
     cy.get('#password').type('secret_sauce') 
     cy.contains('Login').click()
     cy.get('#react-burger-menu-btn').click().should('exist').and('be.visible')
     cy.get('#inventory_sidebar_link').click().should('exist')
     cy.get('.product_sort_container').select('az')
     cy.get('#logout_sidebar_link').click()
     cy.reload()
     cy.url().should('include', 'saucedemo.com')
      })
})