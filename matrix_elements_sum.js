// Task
// Given matrix, a rectangular matrix of integers, just add up all the values that don't appear below a "0".

// Du
function getMatrixElementsSum(matrix) {
  return matrix;
}

// Tests
const matrix1 = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];
const matrix2 = [
  [0, 1, 0, 2],
  [0, 5, 0, 0],
  [2, 4, 3, 0],
];

const matrix3 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const matrix4 = [
  [1, 4, 7, 10],
  [2, 5, 8, 11],
  [3, 6, 9, 12],
];

const matrix5 = [
  [0, 1, 1, 2, 0, 2],
  [0, 5, 0, 0, 1, 2],
  [2, 0, 3, 3, 1, 0],
];

console.log(getMatrixElementsSum(matrix1));
console.log(getMatrixElementsSum(matrix2));
console.log(getMatrixElementsSum(matrix3));
console.log(getMatrixElementsSum(matrix4));
console.log(getMatrixElementsSum(matrix5));
