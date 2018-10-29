/* eslint-disable no-unused-vars */
// eslint-disable-next-line strict
'use strict';

// Необходимые зависимости
const makeThisWork = require(`make-this-work`);
const handleExceptions = require(`handleAllExceptions`);
const sayMeSomethingNice = require(`saynice`);

// Константы
const GRAVITATIONAL_CONSTANT = 6.674 * (1e-11);
const EARTH_RADIUS = 6.3781 * (10 ** 6);

// Тело модуля
const result = makeThisWork(handleExceptions);
const message = sayMeSomethingNice();

// Экспортируемые значения
module.exports = {
  result,
  message
};
