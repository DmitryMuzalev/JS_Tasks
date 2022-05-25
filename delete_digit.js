//_Task
/*  
   Your task is to implement function that accepts integer number (n) and returns maximal
   number you can obtain by deleting exactly one digit of the given number.
   
   For example:
   deleteDigit(152) => 52
*/

//_Function:
//_Solution №1:
function deleteDigit(n) {
  n = String(n).split("");
  for (let i = 0; i < n.length; i++) {
    if (Number(n[i]) < Number(n[i + 1])) {
      n.splice(i, 1);
      return Number(n.join(""));
    }
  }
  n.pop();
  return Number(n.join(""));
}

//_Solution №2:
function deleteDigitV2(n) {
  n = String(n);
  let firstMinNumber = n.split("").find((e, i, arr) => {
    if (arr[i] < arr[i + 1]) {
      return arr[i];
    }
  });
  if (!firstMinNumber) firstMinNumber = n[n.length - 1];
  return Number(n.replace(firstMinNumber, ""));
}

//_Tests:
console.log(deleteDigit(152));
console.log(deleteDigit(7654321));
console.log(deleteDigit(620454011));
console.log(deleteDigit(7745));
console.log(deleteDigit(1001));
console.log(deleteDigit(16));

console.log(deleteDigitV2(152));
console.log(deleteDigitV2(7654321));
console.log(deleteDigitV2(620454011));
console.log(deleteDigitV2(7745));
console.log(deleteDigitV2(1001));
console.log(deleteDigitV2(16));
