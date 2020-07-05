'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
let possibleAnswer = prompt('Введите пароль');
const message =
  possibleAnswer === null
    ? 'Отменено пользователем!'
    : possibleAnswer === ADMIN_PASSWORD
    ? 'Добро пожаловать!'
    : 'Доступ запрещен, неверный пароль!';
alert(message);
