describe("MovieDetails e2e", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    //check how to randomize click among all the available cards
    cy.get('[data-cy="movie-card"]').first().click({ force: true });
  });

  it("Should have exactly one header with a button", () => {
    cy.get('[data-cy="header"]').should("have.length", 1);
    cy.get('[data-cy="header"]')
      .contains("button", "YOUR WISHLIST")
      .should("exist");
  });

  it("Should open wishlist on button click", () => {
    cy.get('[data-cy="button"]')
      .contains("YOUR WISHLIST")
      .click({ force: true });
    cy.get('[data-cy="wishlist"]').should("exist");
    // cy.wait(1000)
    // check for async component load..
  });

  it("Should have a movie poster", () => {
    cy.get('[data-cy="movie-details"]').should("exist");
    cy.get('[data-cy="poster"]').children().should("be.visible");
    // .and(($img) => {
    //isn't working with next image
    //   // "naturalWidth" and "naturalHeight" are set when the image loads
    //   expect($img[0].naturalWidth).to.be.greaterThan(0);
    // });
  });

  it("Should have an add to wishlist button", () => {
    cy.get('[data-cy="movie-details"]').should("exist");
    cy.get('[data-cy="button"]')
      .contains("ADD TO WISHLIST")
      .should("be.visible");
  });

  it("Should have a correct URL", () => {
    cy.url().should("include", "/watch");
    /**
     * For detailed checking of URL samples
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
