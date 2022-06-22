//_Task:
/* 
   Define a class Cube whose constructor function takes exactly one 
   parameter length and stores the value of the argument into this.length. 
   You will then define both a getter and a setter for the surfaceArea and 
   volume of the cube.
*/

//_Solution:

//_Tests:
var cube = new Cube(1);

console.log(cube.length, 1);
console.log(cube.surfaceArea, 6);
console.log(cube.volume, 1);

cube.length = 2;
console.log(cube.surfaceArea, 24);
console.log(cube.volume, 8);

cube.surfaceArea = 54;
console.log(cube.length, 3);
console.log(cube.volume, 27);

cube.surfaceArea = 96;
console.log(cube.length, 4);
console.log(cube.volume, 64);

cube.volume = 125;
console.log(Math.roundTo(cube.length, 5), 5);
console.log(Math.roundTo(cube.surfaceArea, 5), 150);

cube.volume = 1000;
console.log(Math.roundTo(cube.length, 5), 10);
console.log(Math.roundTo(cube.surfaceArea, 5), 600);
