import { AngularExPage } from './app.po';

describe('angular-ex App', () => {
  let page: AngularExPage;

  beforeEach(() => {
    page = new AngularExPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
