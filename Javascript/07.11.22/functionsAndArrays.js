function hasEqualSums(first, second) {
  let firstSum = 0;
  for (let i = 0; i < first.length; i++) {
    firstSum += first[i];
    // firstSum = firstSum + first[0];
  }

  let secondSum = 0;
  for (let i = 0; i < second.length; i++) {
    secondSum += second[i];
  }
  return firstSum === secondSum;
  /*   if (firstSum === secondSum) {
    return true;
  } else {
    return false;
  } */
}

console.log(hasEqualSums([11, 22], [1, 20, 10, 1, 1]));
console.log(hasEqualSums([4, 4], [3, 6]));
