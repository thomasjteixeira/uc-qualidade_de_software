const sum = require('./sum');

it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

it('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

it('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});