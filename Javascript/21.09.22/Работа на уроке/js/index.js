
let now = new Date(0);
console.log(now);

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );

let date = Date.now();
console.log(date.getFullYear()) // позволяет вывести из даты год
console.log(date.getMonth()); // месяц (c 0)
console.log(date.getDate()) // день
console.log(date.getDay()) //
// getHours, getMinutes
// с изменением даты все так же, но вместо get пишем set
date.setFullYear(2020);
console.log(date);
let newDate = new Date(2013, 0, 32); // 32 Jav 2013 ?!?
console.log(newDate); // ...1st Feb 2013!


// Создайте объект Date для даты: 20 апреля 2007 года, 3 часа 12 минут. Временная зона – местная.

// Для вывода используйте console.log().