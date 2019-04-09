context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('type and click search button', () => {
    cy.get('.search-input')
      .type('name').should('have.value', 'name');
    cy.get('.btn-search').click();
  });

  it('click search-by button', () => {
    cy.get('.btn-genre').focus()
      .click()
      .should('be.visible');
  });
});
