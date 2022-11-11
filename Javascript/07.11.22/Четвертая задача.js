function correctName(obj) {
  if (!obj.fathername) {
    return obj.firstname;
  }
  return `${obj.firstname} ${obj.lastname} ${obj.fathername}`;
}

// function correctName(obj) {
// obj.fathername ? `${obj.firstname} ${obj.lastname} ${obj.fathername}` : obj.firstname;
// }


let me = {
  firstname: 'Халид',
  lastname: 'Аюбов',
  fathername: 'Исаевич',
};

console.log(correctName(me));
