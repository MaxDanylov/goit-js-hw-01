'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let userAnswer = prompt('Пожалуйста, введите необходимое количество дроидов');
if (userAnswer === null) {
  console.log('Отменено пользователем!');
} else {
  let amountDroid = Number.parseInt(userAnswer);
  if (Number.isNaN(amountDroid)) {
    alert('Вы ввели некорректное значение вашей покупки.');
  } else {
    const totalPrice = amountDroid * pricePerDroid;
    if (totalPrice > credits) {
      console.log('Недостаточно средств на счету!');
    } else {
      console.log(
        `Вы купили ${amountDroid} дроидов, на счету осталось ${
          credits - totalPrice
        } кредитов.`,
      );
    }
  }
}
