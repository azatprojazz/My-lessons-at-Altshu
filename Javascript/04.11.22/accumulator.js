/* Альтернативный вариант решения
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let accumulatorOdd = arr;

for (let i = 0; i < accumulatorOdd.length; i += 2) {
  console.log(accumulatorOdd[i]);
} */

let arr = [1, 223, -21, 44, 51, 62, -7, 48,-19, 10];
let accumulatorOdd = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    accumulatorOdd.push(arr[i]);
  }
}
  console.log(accumulatorOdd);