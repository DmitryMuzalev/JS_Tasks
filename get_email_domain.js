function getEmailDomain(email) {
  return email.match(/\@+.{1,}/)[0].slice(1);
}

console.log(getEmailDomain("prettyandsimple@example.com")); //example.com
console.log(getEmailDomain("muzalev771@gmail.com")); //gmail.com
console.log(getEmailDomain("muzalev771@yandex.com")); //yandex.com
console.log(getEmailDomain("muzalev@edu-mytyshi.ru")); //edu-mytyshi.ru
