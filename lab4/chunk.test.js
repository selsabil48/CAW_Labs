const chunk = require('./chunk'); // Import your chunk function file

describe('chunk function', () => {
    it('should return an empty array when given an empty array', () => {
        expect(chunk([], 2)).toEqual([]);
    });

    it('should correctly chunk the array into subarrays of specified size', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([
            [1, 2],
            [3, 4],
            [5]
        ]);
        expect(chunk([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
            [1, 2, 3],
            [4, 5, 6],
            [7]
        ]);
        expect(chunk([1, 2, 3, 4, 5], 1)).toEqual([
            [1],
            [2],
            [3],
            [4],
            [5]
        ]);
        expect(chunk([1, 2, 3, 4, 5], 6)).toEqual([
            [1, 2, 3, 4, 5]
        ]);
    });

    it('should not mutate the original array', () => {
        const array = [1, 2, 3, 4, 5];
        chunk(array, 2);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle edge cases like larger size than array length', () => {
        expect(chunk([1, 2, 3], 5)).toEqual([
            [1, 2, 3]
        ]);
    });

    it('should handle negative or zero size', () => {
        expect(chunk([1, 2, 3], 0)).toEqual([]);
        expect(chunk([1, 2, 3], -1)).toEqual([]);
    });
});