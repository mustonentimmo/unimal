/* eslint-disable */
describe('Anchor tags', () => {
  it('should have href', () => {
    //Start from index page
    cy.visit('http://localhost:3000');

    //Check if anchor tags have href attributes
    cy.get('a').should('have.attr', 'href');
  });
});

describe('Filtering', () => {
  it('should open select field', () => {
    cy.get('[class*="-control"]')
      .click(0, 0, { force: true })
      .get('[class*="-menu"]')
      .find('[class*="-option"]')
      .eq(2)
      .click(0, 0, { force: true });
  });
});

describe('Navigation', () => {
  it('should navigate to shelter detail page', () => {
    cy.reload();

    //Find shelter card and click it
    cy.get('div[id="shelter-2"]').click();

    // The new url should include "/shelter"
    cy.url().should('include', '/shelter');
  });

  it('should navigate back to landing page if clicking on the navbar logo', () => {
    cy.get('span[id="navbar_logo"]').click();
    cy.url().should('contain', 'http://localhost:3000');
  });
});
