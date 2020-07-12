'use strict';
const chinaName = 'Китай';
const chinaCost = 100;
const chileName = 'Чили';
const chileCost = 250;
const australiaName = 'Австралия';
const australiaCost = 170;
const indiaName = 'Индия';
const indiaCost = 80;
const jamaicaName = 'Ямайка';
const jamaicaCost = 120;
const userChoice = prompt('Введите страну назначения.');
let countryName;
let cost;
const message = `Доставка в ${countryName} будет стоить ${cost} кредитов`;

if (userChoice === null) {
  alert('Отменено пользователем.');
} else {
  switch (userChoice.toLowerCase()) {
    case chinaName.toLowerCase():
      countryName = chinaName;
      cost = chinaCost;
      console.log(countryName, cost);
      break;
    case chileName.toLowerCase():
      countryName = chileName;
      cost = chileCost;
      break;
    case australiaName.toLowerCase():
      countryName = australiaName;
      cost = australiaCost;
      break;
    case indiaName.toLowerCase():
      countryName = indiaName;
      cost = indiaCost;
      break;
    case jamaicaName.toLowerCase():
      countryName = jamaicaName;
      cost = jamaicaCost;
      break;
    default:
      alert(
        `Я не знаю страны ${userChoice}! В стране ${userChoice} говорят по английски? © Pulp Fiction`,
      );
  }
}
if (countryName !== undefined) {
  alert(message);
}
