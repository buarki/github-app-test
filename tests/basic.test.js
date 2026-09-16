const test = require('node:test');
const assert = require('node:assert');

test('adds two numbers', () => {
  assert.strictEqual(1 + 1, 2);
});

test('joins strings', () => {
  assert.strictEqual('foo' + 'bar', 'foobar');
});

test('array assertions work as expected', () => {
  assert.deepStrictEqual([1, 2, 3].slice(1), [2, 3]);
  assert.ok([].concat('a', 'b').includes('a'));
});

test('object shape assertions are supported', () => {
  const user = {id: 42, name: 'Ada', active: true};

  assert.strictEqual(user.id, 42);
  assert.deepStrictEqual(Object.keys(user).sort(), ['active', 'id', 'name']);
  assert.match(user.name, /^A/);
});

test('Hello World', () => {
  assert.strictEqual('Hello World', 'Hello World');
});
