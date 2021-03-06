//_Task
/*  
   Your task is to implement function that accepts an array of domains (domains) 
   and returns the object with the appearances of the DNS.
*/

//_Function:
function getDNSStats(domains) {
  let result = {};

  domains = domains.map((e) => e.split(".").reverse());

  domains.forEach((e) => {
    let d = "";
    for (let i = 0; i < e.length; i++) {
      d += "." + e[i];
      if (result[d] === undefined) result[d] = 1;
      else result[d]++;
    }
  });

  return result;
}

//_Tests:
const domains1 = ["code.yandex.ru", "music.yandex.ru", "yandex.ru"];

const domains2 = ["example.com", "example.net", "example.org", "example.edu"];

const domains3 = [
  "www.google.ru",
  "mail.google.com",
  "www.youtube.com",
  "play.google.com",
  "calendar.google.com",
];

console.log(getDNSStats(domains1)); //{'.ru': 3, '.ru.yandex': 3, '.ru.yandex.code': 1,'.ru.yandex.music': 1}
console.log(getDNSStats(domains2));
console.log(getDNSStats(domains3));
