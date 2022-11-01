function clearScreen() {
  document.getElementById('result').value = ' ';
};

function display(value) {
  document.getElementById('result').value += value;
};

function calculate() {
  let expr = document.getElementById('result').value;
  let answer = eval(expr)
  document.getElementById('result').value = answer;
}