//_Task:
/* 
   In the popular Minesweeper game you have a board with some mines 
   and cells that have a number in it that indicates the total number 
   of mines in the neighboring cells. Starting off with some arrangement
   of mines we want to create a Minesweeper game setup. 
*/

//_Function:
function minesweeper(matrix) {
  let result = matrix.map((e) => e.map((n) => 0));

  const environment = ([x, y]) => [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        let coordinates = environment([i, j]);
        for (let n = 0; n < coordinates.length; n++) {
          if (
            coordinates[n][0] >= 0 &&
            coordinates[n][1] >= 0 &&
            coordinates[n][0] < matrix.length &&
            coordinates[n][1] < matrix[i].length
          ) {
            result[coordinates[n][0]][coordinates[n][1]]++;
          }
        }
      }
    }
  }

  return result;
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
console.log(minesweeper(matrix2));
console.log(minesweeper(matrix3));
