/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canTraverseAllPairs(nums) {
    // Count of elements in the array
    const numElements = nums.length;
    
    // If only one element, trivially it can traverse itself
    if (numElements === 1) return true;
    
    // Array to maintain disjoint set data structure
    const disjointSet = Array.from({ length: numElements }, (_, index) => index);
    
    // Array to store size of each set for union-find
    const setSize = Array(numElements).fill(1);
    
    // Map to store the first occurrence index of each factor
    const factorFirstOccurrence = new Map();
    
    // Function to find the leader of a set using path compression
    function findSetLeader(x) {
        if (disjointSet[x] === x) return x;
        disjointSet[x] = findSetLeader(disjointSet[x]);
        return disjointSet[x];
    }
    
    // Function to union two sets based on their leaders
    function unionSets(x, y) {
        const xLeader = findSetLeader(x);
        const yLeader = findSetLeader(y);
        if (xLeader === yLeader) return;
        if (setSize[xLeader] < setSize[yLeader]) {
            disjointSet[xLeader] = yLeader;
            setSize[yLeader] += setSize[xLeader];
        } else {
            disjointSet[yLeader] = xLeader;
            setSize[xLeader] += setSize[yLeader];
        }
    }
    
    // Iterating through each element in the array
    for (let i = 0; i < numElements; i++) {
        let num = nums[i];
        let divisor = 2;
        
        // Factorizing the current element
        while (divisor * divisor <= num) {
            if (num % divisor === 0) {
                if (factorFirstOccurrence.has(divisor)) {
                    unionSets(i, factorFirstOccurrence.get(divisor));
                } else {
                    factorFirstOccurrence.set(divisor, i);
                }
                while (num % divisor === 0) {
                    num /= divisor;
                }
            }
            divisor++;
        }
        
        // Handling remaining prime factor greater than 1
        if (num > 1) {
            if (factorFirstOccurrence.has(num)) {
                unionSets(i, factorFirstOccurrence.get(num));
            } else {
                factorFirstOccurrence.set(num, i);
            }
        }
    }
    
    // If all elements belong to the same set, traversal is possible
    return setSize[findSetLeader(0)] === numElements;
}