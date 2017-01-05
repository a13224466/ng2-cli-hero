import { Angular0103Page } from './app.po';

describe('angular0103 App', function() {
  let page: Angular0103Page;

  beforeEach(() => {
    page = new Angular0103Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
