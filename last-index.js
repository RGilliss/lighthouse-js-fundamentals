const lastIndexOf = function (array, num) {
  let same = false;
  let index;
  for (var i = (array.length - 1); i > -1; i--) {
    if (num === array[i]) {
      same = true;
      index = i;
      return index;
    }
  }
if (same) {
  return index;
} else {
  return -1;
}
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);