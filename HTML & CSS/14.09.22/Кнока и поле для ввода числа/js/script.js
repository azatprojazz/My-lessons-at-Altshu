const buttonElement = document.getElementById('btn');
const inputElement = document.getElementById('input-element');


buttonElement.onclick = function() {
  const result = inputElement.value ** 2;
  alert(`Квадрат числа равен ${result}`);
}