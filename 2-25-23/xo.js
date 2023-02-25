function XO(str) {
  let x = 0;
  let o = 0;
  let arr = str.toLowerCase().split("");

  for (let i = 0; i < str.length; i++) {
    if (arr[i] === "x") {
      x = x + 1;
    }
    if (arr[i] === "o") {
      o = o + 1;
    }
  }
  console.log(x + " " + o);
  if (x === o) {
    return true;
  } else {
    return false;
  }
}
