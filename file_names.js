function renameFiles(array) {
  let result = {};
  array.forEach((e) => {
    if (result[e] === undefined) result[e] = 1;
    else {
      result[e + `(${result[e]})`] = 1;
      result[e]++;
    }
  });
  return Object.keys(result);
}

// Test:
console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));

// Result:
// ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
