const express = require(`express`);
const app = express();

app.get(`/users`, function (req, res) {
  res.status(200).send([{name: `tobi`}]);
});

module.exports = app;
