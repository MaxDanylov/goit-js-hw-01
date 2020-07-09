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
if (userChoice === null) {
  alert('Отменено пользователем.');
} else {
  switch (userChoice.toLowerCase()) {
    case chinaName.toLowerCase():
      alert(`Доставка в ${chinaName} будет стоить ${chinaCost} кредитов`);
      break;
    case chileName.toLowerCase():
      alert(`Доставка в ${chileName} будет стоить ${chileCost} кредитов`);
      break;
    case australiaName.toLowerCase():
      alert(
        `Доставка в ${australiaName} будет стоить ${australiaCost} кредитов`,
      );
      break;
    case indiaName.toLowerCase():
      alert(`Доставка в ${indiaName} будет стоить ${indiaCost} кредитов`);
      break;
    case jamaicaName.toLowerCase():
      alert(`Доставка в ${jamaicaName} будет стоить ${jamaicaCost} кредитов`);
      break;
    default:
      alert(
        `Я не знаю страны ${userChoice}! В стране ${userChoice} говорят по английски? © Pulp Fiction`,
      );
  }
}
