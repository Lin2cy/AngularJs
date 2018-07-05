import { MongodbPage } from './app.po';

describe('mongodb App', function() {
  let page: MongodbPage;

  beforeEach(() => {
    page = new MongodbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
