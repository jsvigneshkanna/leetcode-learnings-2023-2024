/*
 * @lc app=leetcode id=443 lang=javascript
 *
 * [443] String Compression
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (chars.length == 1) {
    return 1;
  }
  let currentIndex = 0;
  let charLength = 1;
  chars.push("null");
  for (let index = 1; index < chars.length; index++) {
    if (chars[index] === chars[index - 1]) {
      charLength++;
    } else {
      if (charLength == 1) {
        chars[currentIndex++] = chars[index - 1];
        continue;
      }
      charLength = charLength.toString().split("");
      chars[currentIndex++] = chars[index - 1];
      // currentIndex++
      for (char of charLength) {
        chars[currentIndex++] = char;
      }
      charLength = 1;
    }
  }
  return currentIndex;
};
// @lc code=end
