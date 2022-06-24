Array.prototype.reduce = function (process, initial) {
  var i = 0;
  if (initial === undefined || initial === null) {
    initial = this[0];
    i = 1;
  }
  for (; i < this.length; i++) {
    initial = process(initial, this[i]);
  }
  return initial;
};

//_Test:
console.log(
  ["a", "y", "!"].reduce(function (x, y) {
    return x + y;
  })
); // 'yay!;
