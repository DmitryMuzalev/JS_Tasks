//_Description
/* 
 You are developing an image hosting website.
 You have to create a function for generating random and unique image filenames.
 Create a function for generating a random 6 character string which will be used to access the photo URL.
 To make sure the name is not already in use, you are given access to an PhotoManager object.
 You can call it like so to make sure the name is unique
*/

//_Solution:
const alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
function generateName() {
  let counter = 0;
  let result = "";
  while (counter !== 6) {
    result += alphabet[Math.trunc(Math.random() * alphabet.length)];
    counter++;
  }
  if (photoManager.nameExists("ABCDEF")) return result;
  else generateName();
}

console.log(generateName());
