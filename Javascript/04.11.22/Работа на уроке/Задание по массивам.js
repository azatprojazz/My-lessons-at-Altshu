
/* let students = ['Pavel', 'Khalid', 'Elena', 'Ludmila', 'Anna', 'Kseniya']

console.log(students[4]); // Можно обращаться по индексу

students[1] = 'Mariya'; // Можно заменять массив

console.log(students[3]);

students[6] = 'Yelena G.'; // Можно добавлять несуществующий

console.log(students);

console.log(students.length); */

/* let fruits = ["Яблоко", "Апельсин", "Груша"];
console.log(fruits.pop()); // удаляет Грушу и выводит его
console.log(fruits); */

/* let fruits = ["Яблоко", "Апельсин"];
fruits.push("Груша"); // Добавялет элемент в конец массива
console.log(fruits); */

/* let fruits = ["Яблоко", "Апельсин", "Груша"];
alert( fruits.shift()); // Удаляет из массива первый элемент и возвращает его
alert(fruits); */

/* let fruits = ["Апельсин", "Груша"];
fruits.unshift('Яблоко'); // Добавялет элемент в начало массива
alert(fruits); */

let myFamily = ['Даша', 'Мама', 'Максат', 'Майя', 'Ярик'];
myFamily.shift();
myFamily.pop();
console.log(`${myFamily} ${myFamily.length}`);
myFamily.unshift('Ярик');
myFamily.push('Даша');
console.log(`${myFamily}`);

let language = 'JavaScript';
let oneOfUs = myFamily[4];
oneOfUs = language;
console.log(language);
myFamily.push(oneOfUs);
console.log(myFamily);
