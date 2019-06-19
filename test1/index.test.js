const sum = require('./index');

test('should return sum of 2 number', () => {
  expect(sum(2, 4)).toBe(6);
})
