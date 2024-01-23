/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {

    // Helper function to check if a string has unique characters
    const isUnique = (s) => new Set(s).size === s.length;

    // Backtracking function to explore all possible subsequences
    const backtrack = (start, path) => {
        if (isUnique(path)) {
            // Update maxLength with the maximum length found so far
            maxLength = Math.max(maxLength, path.length);
        }
        for (let i = start; i < arr.length; i++) {
            // Explore the next element in the array to build the subsequence
            backtrack(i + 1, path + arr[i])
        }
    }

    // Initialize maxLength to 0 and start exploration with an empty string
    let maxLength = 0;
    backtrack(0, "");
    
    return maxLength;
};