//_Function:
Array.prototype.map = function (value) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(value(this[i]));
  }
  return result;
};
