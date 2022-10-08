const button = document.getElementById('btn');

const colors = ['red', 'yellow', 'blue', 'white', 'green', 'black'];

button.addEventListener('click', () => {
  let Color = colors[getRandomNumber()];
  document.querySelector('.color').style.backgroundColor = Color;
  colors.textContent = Color;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
