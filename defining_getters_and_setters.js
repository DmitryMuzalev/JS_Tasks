//_Task:
/* 
   Add a getter of name that returns the full name
   Add a setter of name that modifies first name and last name
*/

//_Function:
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + " " + this.lastName;
  }
}
Object.defineProperty(Person.prototype, "name", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(newName) {
    [this.firstName, this.lastName] = newName.split(" ");
  },
});

// Maybe javascript provides the ability to add
// getter and setters to an existing class?

//_Tests:
let marcusFenix = new Person("Marcus", "Fenix"),
  augustusCole = new Person("Augustus", "Cole"),
  damonBaird = new Person("Damon", "Baird"),
  dominicSantiago = new Person("Dominic", "Santiago");

augustusCole.name = "Cole Train";
dominicSantiago.name = "Dom Santiago";

console.log(augustusCole.getName()); // "Cole Train";
console.log(dominicSantiago.getName()); //"Dom Santiago"
