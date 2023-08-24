/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let current = chars[0];
  let streak = 0;
  let compressed = "";

  for (let i = 0; i < chars.length; i++) {
    if (current === chars[i]) {
      streak++;
    } else {
      compressed += current.toString();
      if (streak > 1) {
        compressed += streak.toString();
      }
      current = chars[i];
      streak = 1;
    }
  }

  // Handle the last group
  compressed += current.toString();
  if (streak > 1) {
    compressed += streak.toString();
  }

  // Update the original chars array
  chars.splice(0, chars.length, ...compressed.split(""));

  return compressed.length;
};
