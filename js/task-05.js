'use strict';
const userChoice = prompt('Введите страну назначения.');
let countryName;
let cost;
if (userChoice === null) {
  alert('Отменено пользователем.');
} else {
  switch (userChoice.toLowerCase()) {
    case 'Китай'.toLowerCase():
      countryName = 'Китай';
      cost = 100;
      console.log(countryName, cost);
      break;
    case 'Чили'.toLowerCase():
      countryName = 'Чили';
      cost = 250;
      break;
    case 'Австралия'.toLowerCase():
      countryName = 'Австралия';
      cost = 170;
      break;
    case 'Индия'.toLowerCase():
      countryName = 'Индия';
      cost = 80;
      break;
    case 'Ямайка'.toLowerCase():
      countryName = 'Ямайка';
      cost = 120;
      break;
    default:
      alert(
        `Я не знаю страны ${userChoice}! В стране ${userChoice} говорят по английски? © Pulp Fiction`,
      );
  }
}
const message = `Доставка в ${countryName} будет стоить ${cost} кредитов`;
if (countryName !== undefined) {
  alert(message);
}
