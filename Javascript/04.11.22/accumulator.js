let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let accumulatorOdd = arr;

for (i = 0; i < accumulatorOdd.length; i++) {
  if (accumulatorOdd[i] % 2 == 1) {
    console.log(accumulatorOdd[i]);
  }
}