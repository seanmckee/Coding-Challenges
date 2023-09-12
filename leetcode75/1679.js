/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let i = 0;
  let j = nums.length - 1;
  let res = 0;
  let sorted = nums.sort((a, b) => a - b);

  while (i < j) {
    if (sorted[i] + sorted[j] === k) {
      res++;
      i++;
      j--;
    } else if (sorted[i] + sorted[j] > k) {
      j--;
    } else {
      i++;
    }
  }
  return res;
};
