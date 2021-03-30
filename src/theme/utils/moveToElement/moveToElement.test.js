import MoveToPosition from './moveToElement';

describe('moveToElement()', () => {
  test('scrollIntoView is called', () => {
    document.body.innerHTML = '<div id="contact" />';
    const scrollIntoView = jest.fn();
    HTMLElement.prototype.scrollIntoView = scrollIntoView;
    MoveToPosition('contact', 'nearest');

    expect(scrollIntoView).toHaveBeenCalled();
  });
  test('scrollIntoView is is not called because of invalid option', () => {
    document.body.innerHTML = '<div id="contact" />';
    const scrollIntoView = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoView;
    MoveToPosition('contact', 'test');

    expect(scrollIntoView).not.toHaveBeenCalled();
  });
});
