function feast(beast, dish) {
  //your function here
  if (
    beast[0] === dish[0] &&
    beast[beast.length - 1] === dish[dish.length - 1]
  ) {
    console.log(beast[0]);
    return true;
  } else {
    return false;
  }
}
