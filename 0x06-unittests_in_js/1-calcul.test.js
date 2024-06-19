const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return the sum of rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 2.3, 2.5), 5);
      assert.strictEqual(calculateNumber('SUM', 3.4, 5.4), 8);
      assert.strictEqual(calculateNumber('SUM', -2.2, -4.5), -6);
    });
  });

  describe('SUBTRACT', function () {
    it('should return the difference of rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 2.5), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.4, 5.4), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', -2.2, -4.5), 2);
    });
  });

  describe('DIVIDE', function () {
    it('should return the division of rounded numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.3, 3.5), 0.25);
      assert.strictEqual(calculateNumber('DIVIDE', 3.4, 5.4), 0.6);
    });

    it('should return Error when dividing by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 2.3, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 3.4, 0.2), 'Error');
    });
  });
});