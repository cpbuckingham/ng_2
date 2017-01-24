import { TodoApPage } from './app.po';

describe('todo-ap App', function() {
  let page: TodoApPage;

  beforeEach(() => {
    page = new TodoApPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
