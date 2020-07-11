'use strict';
let input;
let total = 0;
do {
  input = prompt(
    'Укажите число добавляемое к общей сумме. Чтобы получить результат нажмите ОТМЕНА',
  );
  if (!Number.isNaN(Number(input))) {
    total = total + Number(input);
  }
  if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  if (input === null) {
    break;
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${Number(total)}.`);
