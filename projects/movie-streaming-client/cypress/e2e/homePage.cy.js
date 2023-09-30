describe("Homepage e2e", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should have exactly one header with a button", () => {
    cy.get('[data-cy="header"]').should("have.length", 1);
    cy.get('[data-cy="header"]')
      .contains("button", "YOUR WISHLIST")
      .should("exist");
  });

  it("Should open wishlist on button click", () => {
    cy.get('[data-cy="button"]').contains("YOUR WISHLIST").click();
    cy.get('[data-cy="wishlist"]').should("exist");
    // cy.wait(1000)
    // check for async component load..
  });

  it("Should have atleast 3 carousels", () => {
    cy.get('[data-cy="movie-carousel"]').should("have.length", 3);
  });

  it("Should redirect to movie details on card click", () => {
    cy.get('[data-cy="movie-card"]').should("exist");
    cy.get('[data-cy="movie-card"]').first().click({ force: true });
    cy.url().should("include", "/watch");
    /**
   * For detailed checking of URL
   * cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('https://example.cypress.io/commands/location')
      expect(location.host).to.eq('example.cypress.io')
      expect(location.hostname).to.eq('example.cypress.io')
      expect(location.origin).to.eq('https://example.cypress.io')
      expect(location.pathname).to.eq('/commands/location')
      expect(location.port).to.eq('')
      expect(location.protocol).to.eq('https:')
      expect(location.search).to.be.empty
    })
   */
  });
});
