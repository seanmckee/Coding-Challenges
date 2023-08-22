/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let reverse = "";
  let words = s.split(" ");

  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] == "") {
      continue;
    }
    reverse += words[i] + " ";
  }

  return reverse.trim();
};
