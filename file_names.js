function renameFiles(array) {
  let result = [];
  array.forEach((e) => {
    if (!result.includes(e)) result.push(e);
    else result.push(e + `(${result.filter((f) => f === e).length})`);
  });
  return result;
}

// Test:
console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));

// Result:
// ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
