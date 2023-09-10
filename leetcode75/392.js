/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let position = 0;
  if (s === "") return true;
  for (let i = 0; i < t.length; i++) {
    if (s[position] === t[i]) {
      if (position === s.length - 1) return true;
      position++;
    }
  }
  return false;
};
