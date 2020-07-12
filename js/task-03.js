'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
let possibleAnswer = prompt('Введите пароль');
let message;
if (possibleAnswer === null) {
  message = 'Отменено пользователем!';
} else if (possibleAnswer === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
