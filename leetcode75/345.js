/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let c = [];
  let v = [];
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      v.push(s[i]);
      c.push(null);
    } else {
      c.push(s[i]);
    }
  }

  v.reverse();
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (c[i] !== null) {
      res = res + c[i];
    } else {
      res = res + v[j];
      j++;
    }
  }

  return res;
};
