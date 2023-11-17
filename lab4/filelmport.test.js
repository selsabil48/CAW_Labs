// Import the mean function from notation.js
const mean = require('./notation');

// Function to test the mean function
describe('Mean function', () => {
    it('Calculates the mean of an array of numbers', () => {
        // Test data
        const scores1 = [75, 80, 95, 60, 85];
        const scores2 = [90, 88, 92, 78, 86];

        // Expected results
        const expectedAverage1 = 79;
        const expectedAverage2 = 86.8;

        // Calculate averages using the mean function
        const average1 = mean(scores1);
        const average2 = mean(scores2);

        // Compare the calculated averages with the expected values
        expect(average1).toBe(expectedAverage1);
        expect(average2).toBe(expectedAverage2);
    });
});