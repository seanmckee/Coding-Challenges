var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array

  if (iterable.length === 0) {
    return [];
  }

  let current = iterable[0];
  let result = [iterable[0]];

  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== current) {
      result.push(iterable[i]);
      current = iterable[i];
    }
  }
  return result;
};
