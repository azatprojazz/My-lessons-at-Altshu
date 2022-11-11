/* value - значение счетчика на данный момент
reset - метод обнуления счетчика
increment - метод увеличения счетчика на единицу
decrement - метод уменьшения счетчика на единицу
incrementBy - метод увеличения счетчика на указанное число
print - метод вывода в консоль значения счетчика */

let counter = {
  value: 0,
  reset: function() {
    console.log(this.value);
  },
  increment: function() {

  },
  decrement: function() {

  },
  incrementBy: function() {

  },
  print: function() {
    console.log(this.value);
  },
}

counter.print()