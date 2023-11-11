 
function mean(scores) {
    if (scores.length === 0) {
      return 0; // Handle the case of an empty array to avoid division by zero.
    }
  
    const sum = scores.reduce((total, score) => total + score, 0);
    return sum / scores.length;
  }
  
  module.exports = mean; // Export the mean function for use in other files.
  