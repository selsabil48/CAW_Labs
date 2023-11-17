// Import the function to be tested
const last = require('./last');

describe('last function', () => {
    it('returns the last element when n is not provided', () => {
        const array = [1, 2, 3, 4, 5];
        expect(last(array)).toBe(5);
    });

    it('returns last n elements when n is provided', () => {
        const array = [1, 2, 3, 4, 5];
        expect(last(array, 3)).toEqual([3, 4, 5]);
    });

    it('returns an empty array if input array is null', () => {
        const array = null;
        expect(last(array)).toEqual([]);
    });

    it('returns an empty array if n is 0', () => {
        const array = [1, 2, 3, 4, 5];
        expect(last(array, 0)).toEqual([]);
    });

    it('returns the whole array if n is greater than array length', () => {
        const array = [1, 2, 3, 4, 5];
        expect(last(array, 10)).toEqual([1, 2, 3, 4, 5]);
    });

    // Add more test cases for edge conditions or specific scenarios
});