const body = document.querySelector('body');
const lightThemeBtn = document.querySelector('.light-theme-btn');
const darkThemeBtn = document.querySelector('.dark-theme-btn');
const randomThemeBtn = document.querySelector('.random-theme-btn');

function turnOnLightTheme() {
  body.style.color = '#373737';
  body.style.background = 'white';
}
function turnOnDarktTheme() {
  body.style.color = 'white';
  body.style.background = '#373737';
}

function getRandomNum(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}

function generateRandomRGAColor() {
  let randomColor = `rgb(${getRandomNum(0, 255)}, ${getRandomNum(0, 255)}, ${getRandomNum(0, 255)})`;
  return randomColor;
}

function turnOnRandomTheme() {
  // body.style.color = generateRandomRGAColor(); // Эта функция делает генерацию цвета шрифтов
  body.style.color = 'black';
  body.style.background = generateRandomRGAColor();
}

lightThemeBtn.addEventListener('click', turnOnLightTheme);
darkThemeBtn.addEventListener('click', turnOnDarktTheme);
randomThemeBtn.addEventListener('click', turnOnRandomTheme);