import { niceNumber } from 'gitboot/helpers/nice-number';
import { module, test } from 'qunit';

module('Unit | Helper | nice number');

test('less than 1000', function(assert) {
  assert.equal(niceNumber([42]), "42");
});

test('Zero', function(assert) {
  assert.equal(niceNumber([0]), "0");
});

test('Blank', function(assert) {
  assert.equal(niceNumber([]), "");
});

test('Gt 1000', function(assert) {
  assert.equal(niceNumber([121867]), "121.9K");
});


test('Lt Neg 1000', function(assert) {
  assert.equal(niceNumber([-121867]), "-121.9K");
});
