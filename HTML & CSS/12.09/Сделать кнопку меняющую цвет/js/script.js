const button = document.getElementById('btn');

const colors = ['red', 'yellow', 'blue', 'white', 'green', 'black'];

button.addEventListener('click', () => {
  let hexColor = colors[getRandomNumber()];
  document.querySelector('.color').style.backgroundColor = hexColor;
  colors.textContent = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
