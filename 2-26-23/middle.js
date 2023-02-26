function getMiddle(s) {
  //   console.log("FIRST: " + s[s.length/2 -1] + s[s.length/2])
  //   console.log("SECOND: " + s[s.length/2])
  if (s.length % 2 === 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    return s[s.length / 2 - 0.5];
  }
}
