const express = require(`express`);

const app = express();

// Корень сайта
app.get(`/`, (req, res) => res.send(`root`));

// Раздел /about
app.get(`/about`, (req, res) => res.send(`root`));

// Путь /random.text
app.get(`/random.text`, (req, res) => res.send(`random.text`));

// Путь /keks или /kks
app.get(`/ke?ks`, (req, res) => res.send(`keks`));

// Путь /keeeeks или /keks, или /keeks и т.д.
app.get(`/ke+ks`, (req, res) => res.send(`keks`));

// Путь /keks или /keks, или /ks
app.get(`/k(ek)?s`, (req, res) => res.send(`keks`));

// Для запроса GET /cat/keks — вернёт keks
// Для запроса GET /cat/something — вернёт something
app.get(`/cat/:name`, (req, res) => res.send(req.params.name));

// Для запроса GET /cat/keks/thegreat — вернёт keks thegreat
// Для запроса GET /cat/Кот/Матроскин — вернёт Кот Матроскин
app.get(`/cat/:name/:familyname`, (req, res) => res.send(`${req.params.name} ${req.params.familyname}`));

// Ловит всё что заканчивается на keks — /mykeks, /catkeks, но не /keks-cat, /getkeksnow...
app.get(/.*keks$/, (req, res) => res.send(`keks`));


// Ловит всё что содержит keks — /keks-cat, /getkeksnow, ....
app.get(/keks/, (req, res) => res.send(`keks`));

// Ловит всё что заканчивается на keks — /mykeks, /catkeks, но не /keks-cat, /getkeksnow...
app.get(/.*keks$/, (req, res) => res.send(`keks`));

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
