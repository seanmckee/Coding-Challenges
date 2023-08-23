/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let res = [];
  let start = 1;
  for (let i = 0; i < nums.length; i++) {
    res.push(start);
    start = start * nums[i];
  }

  start = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * start;
    start = start * nums[i];
  }

  return res;
};
