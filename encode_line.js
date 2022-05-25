//_Task:
/* 
   Your task is to implement function that accepts string (str) and returns its encoded version.
   For example: encodeLine('aabbbc') => '2a3bc'
*/

//_Function:
function encodeLine(string) {
  let result = "";
  let counter = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) counter++;
    else {
      if (counter > 1) {
        result += counter + string[i];
        counter = 1;
      } else result += string[i];
    }
  }
  return result;
}

//_Tests:
console.log(encodeLine("aabbbc"));
console.log(encodeLine("asidjiadj"));
console.log(encodeLine("fffasadskaaaa adaisdhaaseee adjijaaaeerrwe"));
