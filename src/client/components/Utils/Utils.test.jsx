import Utils from './Utils';

describe('Utils', () => {
  test('check for Enter', () => {
    const event = {};
    event.preventDefault = jest.fn();
    event.key = 'Enter';
    Utils.preventPressEnter(event);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });

  test('check for any key but Enter', () => {
    const event = {};
    event.preventDefault = jest.fn();
    event.key = 'anyKey';
    Utils.preventPressEnter(event);
    expect(event.preventDefault).toHaveBeenCalledTimes(0);
  });
});
