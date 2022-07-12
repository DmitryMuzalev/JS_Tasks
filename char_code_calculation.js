//_Task:
/* 
Given a string, turn each character into its ASCII character code and join them 
together to create a number - let's call this number total1.
Then replace any incidence of the number 7 with the number 1, and call this 
number 'total2'
Then return the difference between the sum of the digits in total1 and total2
*/

//_Solution:
function calc(x) {
  let result = "";
  x.split("").forEach((e) => {
    let ASCII = String(e.charCodeAt())
      .split("")
      .filter((e) => e === "7")
      .join("");
    result += ASCII;
  });
  return result.length * 6;
}

//_Tests:

console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")); //96
