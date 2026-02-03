describe('Explore Payroll Products', () => {
  it('navigates to Paylocity and clicks on Products link', () => {
    cy.visit('https://www.paylocity.com/')
    cy.contains('a', 'Pricing').click()
    cy.get('input[name="email"]').should('be.visible')
    cy.get('input[type="submit"][value="Request Pricing"]').should('be.visible')
  })
})
