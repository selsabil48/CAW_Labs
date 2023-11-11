

const mean = require('./notation'); // Import the mean function from notation.js

// Example usage of the mean function
const scores1 = [75, 80, 95, 60, 85];
const scores2 = [90, 88, 92, 78, 86];

const average1 = mean(scores1);
const average2 = mean(scores2);

console.log('Average of scores1:', average1);
console.log('Average of scores2:', average2);
