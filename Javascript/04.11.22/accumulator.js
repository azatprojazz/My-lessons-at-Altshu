let arr = [1, 223, -21, 44, 51, 62, -7, 48,-19, 10];
let accumulatorOdd = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    accumulatorOdd.push(arr[i]);
  }
}
  console.log(accumulatorOdd);