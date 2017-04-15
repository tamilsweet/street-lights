import { StreetLightsPage } from './app.po';

describe('street-lights App', () => {
  let page: StreetLightsPage;

  beforeEach(() => {
    page = new StreetLightsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
