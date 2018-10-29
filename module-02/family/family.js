// Файл family.js
const fatherName = require(`./father`).name;
const motherName = require(`./mother`).name;
const children = require(`./children`);

module.exports = `Отец: ${fatherName}, мать: ${motherName}. Дети: ${children}`;
