//_Task:
/* 
   In the popular Minesweeper game you have a board with some mines 
   and cells that have a number in it that indicates the total number 
   of mines in the neighboring cells. Starting off with some arrangement
   of mines we want to create a Minesweeper game setup. 
*/

//_Function:
function minesweeper(matrix) {
  return matrix;
}

//_Tests:
const matrix1 = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
];

const matrix2 = [
  [true, false, true],
  [false, false, false],
  [false, true, false],
];

const matrix3 = [
  [true, false, true, false, true],
  [true, false, true, false, true],
  [false, true, false, false, true],
  [false, false, false, false, true],
  [true, true, false, true, true],
];

console.log(minesweeper(matrix1));
//console.log(minesweeper(matrix2));
//console.log(minesweeper(matrix3));
