let randomNumber = Math.floor(Math.random() * 100) + 1; // загадали число
let attempts = 10; // задали попытки

const guessField = document.getElementById("guessField"); // поле для ввода
const lowOrHigh = document.querySelector(".lowOrHigh"); // текст подсказки
const guesses = document.querySelector(".guesses"); // текст попыток
const guessSubmit = document.querySelector(".guessSubmit");

const checkGuess = () => {
  const userGuess = Number(guessField.value); //перевели строку, которую ввел пользователь в число
  if (attempts > 1) {
    if (randomNumber === userGuess) {
      lowOrHigh.textContent = "Ура! Ты угадал!";
      lowOrHigh.style.backgroundColor = "green";
    } else if (userGuess > randomNumber) {
      lowOrHigh.textContent = "Попробуй число поменьше...";
      attempts -= 1; // уменьшили количество попыток на 1
      guesses.textContent = `У вас осталось ${attempts} попыток`; // вывели число попыток на экран
    } else if (userGuess < randomNumber) {
      lowOrHigh.textContent = "Попробуй число поменьше...";
      attempts -= 1; // уменьшили количество попыток на 1
      guesses.textContent = `У вас осталось ${attempts} попыток`; // вывели число попыток на экран
    }
  } else {
    guesses.textContent = "Вы проиграли!";
    guesses.style.backgroundColor = "tomato";
    lowOrHigh.textContent = "У вас закончились попытки!";
    lowOrHigh.style.backgroundColor = "tomato";
  }
};

guessSubmit.addEventListener("click", checkGuess); // ставим событие "клик на кнопку", он будет вызывать нашу функцию)

/* 4) условие
если число пользователя больше загаданного, то предложить ввести поменьше, уменьшить количество попыток и вывести количество оставшихся попыток,
если число пользователя меньше загаданного, то предложить ввести большее, уменьшить количество попыток и вывести количество оставшихся попыток,
если пользователь угадал число, то надо ему об этом сказать!
если пользователь не угадал число и его попытки закончились, то говорим удачи дорогой пользователь повезет в следующий раз!
*/
// 5) написать поздравление для пользователя, о том что он молодец и угадал число
// 6) сделать сброс для реиграбельности
