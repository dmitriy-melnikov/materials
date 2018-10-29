const express = require(`express`);
const app = express();

const PORT = parseInt(process.env.SERVER_PORT, 10) || 3000;

app.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept`);
  next();
});

app.get(`/`, (req, res) => res.send(`Hello World!`));
app.get(`/hello`, (req, res) => res.send(`Hello from hello!`));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
