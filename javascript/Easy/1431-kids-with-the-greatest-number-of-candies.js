/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandy = Math.max(...candies)
    console.log(maxCandy)
  candies.forEach((candy, index, array) => {
    array[index] = candy + extraCandies >= maxCandy;
});

    return candies
};