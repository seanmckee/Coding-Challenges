const areaOrPerimeter = function (l, w) {
  // Return your answer
  if (l === w) {
    return l * w;
  } else {
    return l + l + w + w;
  }
};
