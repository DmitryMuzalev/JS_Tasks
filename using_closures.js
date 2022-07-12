//_Description:
/* 
   Summary of requirements:
   
   1. Cat constructor, requiring arguments for name and weight
   2. Throw an error if name or weight not specified when invoking the constructor.
   3. Cat.averageWeight() method should give the average weight of all cat instances created with Cat, even after if the instance's properties have changed.
   4.Must use Object.defineProperty
*/

//_Solution:
class Cat {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
  static averageWeight() {}
}

//_Tests:
let fluffy = new Cat("fluffy", 15);
let garfield = new Cat("garfield", 25);

console.log(fluffy.weight); //15
console.log(fluffy instanceof Cat); //true
console.log(fluffy.averageWeight); //undefined
console.log(typeof Cat.averageWeight); //"function"
//console.log(Cat.averageWeight()); //20
