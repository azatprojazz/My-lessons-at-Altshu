let dayToday = prompt('Какой сегодня день недели по счету (от 1 до 7)', '');
let dayHour = prompt('Который час без минут (от 0 до 23)', '');
let dayMinut = prompt('Сколько минут (от 0 до 59)', '');

if (dayToday % 2 !== 0 && dayToday !== 7 && dayHour < 19) {
  alert('Да, сегодня планируется занятие');
} else if (dayToday == 2 || dayToday == 4 || dayToday == 7) {
  alert('Завтра будет занятие');
} else if (
  dayToday % 2 !== 0 &&
  dayToday !== 7 &&
  dayHour >= 21 &&
  dayMinut > 30
) {
  alert('Сегодняшнее занятие прошло');
} else {
  dayToday % 2 !== 0 && dayToday !== 7 && dayHour >= 19 && dayHour <= 21;
  alert('Занятие идет прямо сейчас');
}
