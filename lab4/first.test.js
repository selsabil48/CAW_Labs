const assert = require('assert');

function first(array, n) {
    if (array == null || n <= 0)
        return [];
    if (n == null)
        return array[0];
    return array.slice(0, n);
}

// Test cases
describe('first function', () => {
    it('should return an empty array if input array is null', () => {
        assert.deepStrictEqual(first(null, 2), []);
    });

    it('should return an empty array if n is 0 or negative', () => {
        assert.deepStrictEqual(first([1, 2, 3], -1), []);
        assert.deepStrictEqual(first([1, 2, 3], 0), []);
    });

    it('should return the first element if n is not provided', () => {
        assert.strictEqual(first([5, 6, 7]), 5);
    });

    it('should return the first n elements of the array', () => {
        assert.deepStrictEqual(first([1, 2, 3, 4, 5], 3), [1, 2, 3]);
    });

    it('should return the whole array if n is greater than the array length', () => {
        assert.deepStrictEqual(first([1, 2, 3], 5), [1, 2, 3]);
    });
});