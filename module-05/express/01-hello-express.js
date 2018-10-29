const express = require(`express`);
const app = express();

app.get(`/`, (req, res) => res.send(`Hello World!`));
app.get(`/hello`, (req, res) => res.send(`Hello from hello!`));

app.listen(3000, () => console.log(`Example app is available on http://localhost:3000/`));
