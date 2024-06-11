const getMonday = require('../src/getMonday');

test('gets the Monday of the week for a given date', () => {
  const result = getMonday('2024-06-11');
  expect(result.toISOString()).toBe('2024-06-10T00:00:00.000Z');
});
