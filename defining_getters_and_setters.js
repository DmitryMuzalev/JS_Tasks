//_Task:
/* 
   Add a getter of name that returns the full name
   Add a setter of name that modifies first name and last name
*/

//_Function:
class Person {
  // You can't redeclare "Person", so this won't work...
}

Person.prototype.name; // Will this work?

// Maybe javascript provides the ability to add
// getter and setters to an existing class?

//_Tests:
let marcusFenix = new Person("Marcus", "Fenix"),
  augustusCole = new Person("Augustus", "Cole"),
  damonBaird = new Person("Damon", "Baird"),
  dominicSantiago = new Person("Dominic", "Santiago");
