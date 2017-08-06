import { Prueba4PortfolioMarcoPage } from './app.po';

describe('prueba4-portfolio-marco App', () => {
  let page: Prueba4PortfolioMarcoPage;

  beforeEach(() => {
    page = new Prueba4PortfolioMarcoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
