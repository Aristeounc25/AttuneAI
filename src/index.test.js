const { greet, add } = require('./index');

describe('greet', () => {
  test('returns default greeting when no name', () => {
    expect(greet()).toBe('Hello, World!');
  });

  test('returns personalized greeting', () => {
    expect(greet('AttuneAI')).toBe('Hello, AttuneAI!');
  });
});

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
