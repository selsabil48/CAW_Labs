const mean = require('./notation'); // Assuming the mean function is in a file named 'notation.js'

describe('mean function', () => {
    test('returns the correct mean of an array of numbers', () => {
        // Test case 1: Array with positive numbers
        expect(mean([1, 2, 3, 4])).toBe(2.5);

        // Test case 2: Array with negative numbers
        expect(mean([-1, -2, -3, -4])).toBe(-2.5);

        // Test case 3: Array with both positive and negative numbers
        expect(mean([-1, 2, -3, 4])).toBe(0.5);

        // Test case 4: Array with a single number
        expect(mean([5])).toBe(5);

        // Test case 5: Empty array
        expect(mean([])).toBe(0);
    });

    test('returns 0 for an empty array', () => {
        expect(mean([])).toBe(0);
    });
});