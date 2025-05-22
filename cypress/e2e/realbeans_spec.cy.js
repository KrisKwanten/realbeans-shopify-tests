describe('RealBeans Shopify Store - End-to-End Test', () => {
  const storeUrl = 'https://r0996202-realbeans.myshopify.com';
  const password = 'theoff'; // <- vervang dit

  beforeEach(() => {
    cy.visit(storeUrl);

    cy.get('input[type="password"]').then(($input) => {
      if ($input.length) {
        cy.wrap($input).type(password);
        cy.get('button[type="submit"]').click();
      }
    });
  });

  it('Toont de homepage correct', () => {
    cy.contains('Since 1801, RealBeans has roasted premium coffee in Antwerp').should('be.visible');
  });

  it('Toont de juiste producten in de catalogus', () => {
    cy.visit(`${storeUrl}/collections/all`);
    cy.get('.product-card, .card-wrapper').should('have.length.at.least', 1);
  });

  it('Sorteert producten op prijs', () => {
    cy.visit(`${storeUrl}/collections/all`);
   cy.get('select').eq(0).select('Price, low to high');

    cy.wait(1000);
  });

  it('Toont correcte productdetailpagina', () => {
    cy.visit(`${storeUrl}/collections/all`);
cy.get('a[href*="/products/"]')
  .filter(':visible')     // alleen zichtbare links
  .first()
  .click();
    cy.get('h1, .product__title').should('exist');
    cy.get('.price, .product__price').should('exist');
    cy.get('img').should('exist');
  });

  it('Toont de About-pagina correct', () => {
    cy.get('a').contains('About').click();
    cy.contains('From a small Antwerp grocery to a European coffee staple').should('be.visible');
  });
});
