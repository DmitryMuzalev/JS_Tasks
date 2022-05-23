function isMAC48Address(string) {
  let result = string.split("-");
  if (result.length !== 6) return false;
  return result.every((e) => {
    if (e.length !== 2) return false;
    else return !/[^0-9A-F]/g.test(e);
  });
}

//Test
console.log(isMAC48Address("00-1B-63-84-45-E6")); //true
console.log(isMAC48Address("00-1B-63-84-45")); //false
console.log(isMAC48Address("00-1B-63-84-45-8F-A5")); //false
console.log(isMAC48Address("00-26-57-00-1F-02")); //true
console.log(isMAC48Address("0E-26-5@-00-1F-0B")); //false
console.log(isMAC48Address("0S-1B-63-84-45-E6")); //false
console.log(isMAC48Address("f-e-d-c-b-a")); //false
console.log(isMAC48Address("abcd12")); //false
