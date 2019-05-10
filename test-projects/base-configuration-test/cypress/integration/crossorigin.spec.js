/// <reference types="Cypress" />

context('Crossorigin', () => {
  it('The crossorigin attribute should be set on every <link rel="preload"> tag', () => {
    cy.visit('http://localhost:9000')
    cy.get("link").then($el => {
      $el.each((i, el) => {
        if(el.nodeName.toLowerCase() === "link" && el.getAttribute("rel") === "preload") {
          expect(el.hasAttribute("crossorigin")).to.equal(true);
        }
      });
    })
  })
})
