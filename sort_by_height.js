//_Task:
/* 
   Given an array with heights, sort them except if the value is -1. 
   Your task is to implement function that accepts array (arr) and returns it sorted
   For example:
   sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]) => [-1, 150, 160, 170, -1, -1, 180, 190]
*/

//_Function:
function sortByHeight(array) {
  const length = array.length;
  let indexesBlock = [];
  let result = [];

  array = array
    .filter((e, i) => {
      if (e === -1) indexesBlock.push(i);
      return e !== -1;
    })
    .sort((a, b) => a - b);

  if (!indexesBlock.length) return array;

  for (let i = 0; i < length; i++) {
    if (indexesBlock.includes(i)) result.push(-1);
    else result.push(array.shift());
  }

  return result;
}

//_Tests:
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log(sortByHeight([99, 17, 55, -21, -1, 22, 0, -1, 190, -1, 160, 180]));
