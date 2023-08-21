/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let open = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (
        (flowerbed[i - 1] === 0 || i === 0) &&
        (flowerbed[i + 1] === 0 || i === flowerbed.length - 1)
      ) {
        open++;
        i++;
      }
    }
  }
  if (open >= n) {
    return true;
  } else {
    return false;
  }
};
