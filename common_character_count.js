//_Task:
/* 
   Your task is to implement function that accepts two strings (s1 and s2) and returns number of common characters between them.
   For example:
   getCommonCharacterCount('aabcc', 'adcaa') => 3
*/

//_Function:
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  s1 = s1.split("");
  s2 = s2.split("");

  for (let i = 0; i < s1.length; i++) {
    let index = s2.indexOf(s1[i]);
    if (index !== -1) {
      counter++;
      delete s2[index];
    }
  }

  return counter;
}

//_Tests:

console.log(getCommonCharacterCount("aabcc", "adcaa"));
console.log(getCommonCharacterCount("aabdufaudfhauicc", "adcsdfsihdaa"));
console.log(getCommonCharacterCount("testString", "testString"));
console.log(getCommonCharacterCount("sbdfhbsdf", "gagd"));
console.log(getCommonCharacterCount("sbdfh", "gamasdsguigdigfgd"));
