function filterNamesByLength(names, number) {
  let newArr = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].length === number) {
      newArr.push(names[i]);
    }
  }
  return newArr;
}

console.log(
  filterNamesByLength(['Khalid', 'Azat', 'Kseniya', 'Anna', 'Marina'], 4)
);
