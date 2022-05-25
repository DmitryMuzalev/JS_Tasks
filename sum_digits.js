//_Task:
/* 
  Your task is to implement function that accepts a number (n) and returns the sum of its digits until we get to a one digit number.
  For example:
  For 100, the result should be 1 (1 + 0 + 0 = 1)
  getSumOfDigits(100) => 1
  For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
  getSumOfDigits(91) => 1
*/

//_Function:
function getSumOfDigits(n) {
  let result = String(n)
    .split("")
    .reduce((a, b) => Number(a) + Number(b));
  if (result > 9) return getSumOfDigits(result);
  else return result;
}

//_Tests:
console.log(getSumOfDigits(100));
console.log(getSumOfDigits(91));
console.log(getSumOfDigits(99));
console.log(getSumOfDigits(155));
console.log(getSumOfDigits(1564));
console.log(getSumOfDigits(22254548481));
