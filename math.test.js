const math = require('./math');

describe('Math functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(math.add(1, 2)).toBe(3);
  });

  test('multiplies 2 * 3 to equal 6', () => {
    expect(math.multiply(2, 3)).toBe(6);
  });
});