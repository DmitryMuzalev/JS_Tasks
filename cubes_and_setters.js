//_Task:
/* 
   Define a class Cube whose constructor function takes exactly one 
   parameter length and stores the value of the argument into this.length. 
   You will then define both a getter and a setter for the surfaceArea and 
   volume of the cube.
*/

//_Solution:
class Cube {
  constructor(length) {
    this.length = length;
  }

  get surfaceArea() {
    return 6 * Math.pow(this.length, 2);
  }
  set surfaceArea(n) {
    this.length = Math.sqrt(n / 6);
  }

  get volume() {
    return Math.pow(this.length, 3);
  }
  set volume(n) {
    this.length = Math.cbrt(n);
  }
}

//_Tests:
var cube = new Cube(1);

console.log(cube.length); // 1
console.log(cube.surfaceArea); // 6
console.log(cube.volume); // 1

console.log("-----------------------");

cube.length = 2;
console.log(cube.surfaceArea); //24
console.log(cube.volume); // 8

console.log("-----------------------");

cube.surfaceArea = 54;
console.log(cube.length); // 3
console.log(cube.volume); // 27

console.log("-----------------------");

cube.surfaceArea = 96;
console.log(cube.length); // 4
console.log(cube.volume); //64

console.log("-----------------------");
