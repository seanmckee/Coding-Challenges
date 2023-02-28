function isIsogram(str) {
  //...
  let text = str.toLowerCase();
  let letters = {};
  for (let i = 0; i < text.length; i++) {
    if (!letters[text[i]]) {
      console.log("NOT LETERS");
      letters[text[i]] = 1;
    } else {
      letters[text[i]]++;
    }
  }
  for (let i = 0; i < text.length; i++) {
    if (letters[text[i]] > 1) {
      return false;
    }
  }

  return true;
}
