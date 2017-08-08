import { AnginePage } from './app.po';

describe('angine App', () => {
  let page: AnginePage;

  beforeEach(() => {
    page = new AnginePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
