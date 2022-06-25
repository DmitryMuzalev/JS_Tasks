//_Description:
/* 
   You are given a complex object that has many deeply nested variables. 
   You don't want to go the usual if obj.property == null route. 
   Create a prototype method that given a nested path, either return the value or undefined.
*/

//_Solution:
Object.prototype.hash = function (string) {
  const arrayKeys = string.split(".");
  let varThis = this;
  for (let i = 0; i < arrayKeys.length; i++) {
    if (varThis[arrayKeys[i]]) {
      varThis = varThis[arrayKeys[i]];
    } else return undefined;
  }
  return varThis;
};

//_Tests:
var obj = {
  person: {
    name: "joe",
    history: {
      hometown: "bratislava",
      bio: {
        funFact: "I like fishing.",
      },
    },
  },
};

console.log(obj.hash("person.name")); //"joe"
console.log(obj.hash("person.game.home")); //undefined
console.log(obj.hash("person.name")); // 'joe'
console.log(obj.hash("person.history.bio")); // { funFact: 'I like fishing.' }
console.log(obj.hash("person.history.homeStreet")); // undefined
console.log(obj.hash("person.animal.pet.needNoseAntEater")); // undefined
