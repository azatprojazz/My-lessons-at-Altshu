function concatNames(obj, lastname) {
  let resultStr = '';
  resultStr = resultStr + obj.firstname + ' ' + lastname;
  return resultStr;
}

let person = {
  firstname: 'Елена',
  city: 'Питер',
  phone: 89133124134,
};

console.log(concatNames(person, 'Григорьева'));
