import { PdfsystemPage } from './app.po';

describe('pdfsystem App', () => {
  let page: PdfsystemPage;

  beforeEach(() => {
    page = new PdfsystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
