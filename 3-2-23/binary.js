const binaryArrayToNumber = (arr) => {
  // your code
  let binary = arr.reverse();
  let sum = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === 1) {
      sum = sum + 2 ** i;
    }
  }
  return sum;
};
