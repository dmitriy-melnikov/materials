const express = require(`express`);
const app = express();

const myNumber = Math.random();

app.get(`/state`, (req, res) => {
  setTimeout(() => res.send(`My number is: ${myNumber}`), 1500);
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
