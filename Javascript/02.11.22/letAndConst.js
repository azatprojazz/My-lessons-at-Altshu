/* let от const отличается своей изменяемостью. Можно всегда менять переменную, а const неизменяемый. Значение заданное в const, нельзя перезаписать в коде ниже */

let weather = 'Солнечная';
let colorRGB = 'rgb(255, 255, 255)';
// weather = 'Пасмурная'; Можно перезаписать переменную
// colorRGB = 'rgb(0, 0, 0,)'; Эту тоже

const myName = 'Azat';
const myTeacherJsAltshu = 'Khalid';
// myName = 'Pavel'; Нельзя изменить константу
// myTeacherJsAltshu = 'Maksim'; Эту тем более нельзя изменить

console.log(weather);
console.log(colorRGB);
console.log(myName);
console.log(myTeacherJsAltshu);
