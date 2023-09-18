/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let vowels = "aeiou";
  let currentTotal = 0;
  let total = 0; // total number of vowels in sliding window
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    if (vowels.indexOf(s[end]) !== -1) {
      currentTotal++;
    }
    if (end - start === k) {
      if (vowels.indexOf(s[start]) !== -1) {
        currentTotal--;
      }
      start++;
    }
    if (currentTotal > total) {
      total = currentTotal;
    }
  }
  return total;
};
