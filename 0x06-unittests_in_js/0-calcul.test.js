const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return 5 when inputs are 2 and 3', function () {
    assert.strictEqual(calculateNumber(2, 3), 5);
  });

  it('should return 7 when inputs are 3.5 and 3.5', function () {
    assert.strictEqual(calculateNumber(3.5, 3.5), 8);
  });

  it('should return 10.3 when inputs are 2 and 8.3', function () {
    assert.strictEqual(calculateNumber(2, 8.3), 10);
  });

  it('should return -5 when inputs are -2 and -3', function () {
    assert.strictEqual(calculateNumber(-2, -3), -5);
  });

  it('should return -2 when inputs are 1 and -3', function () {
    assert.strictEqual(calculateNumber(1, -3), -2);
  });

  it('should return -7 when inputs are -3.6 and -2.8', function () {
    assert.strictEqual(calculateNumber(-3.6, -2.8), -7);
  });

  it('should return -5 when inputs are -2.3 and -2.6', function () {
    assert.strictEqual(calculateNumber(-2.3, -2.6), -5);
  });

  it('should return 7 when inputs are 2.5 and 3.7', function () {
    assert.strictEqual(calculateNumber(2.5, 3.7), 7);
  });

  it('should return 1 when inputs are 0.5 and 0.3', function () {
    assert.strictEqual(calculateNumber(0.5, 0.3), 1);
  });
});
