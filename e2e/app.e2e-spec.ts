import { StokerAppPage } from './app.po';

describe('stoker-app App', () => {
  let page: StokerAppPage;

  beforeEach(() => {
    page = new StokerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
