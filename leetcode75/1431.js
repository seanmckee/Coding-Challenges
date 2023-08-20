/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let greatest = Math.max(...candies);
  let res = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= greatest) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return res;
};
