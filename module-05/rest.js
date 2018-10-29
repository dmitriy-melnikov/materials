const express = require(`express`);
const bodyParser = require(`body-parser`);
const busboy = require(`connect-busboy`);

const app = express();

const WIZARDS = [
  {name: `Пендальф`}
];
app.get(`/wizards`, (req, res) => res.send(WIZARDS));
app.get(`/wizards/:name`, (req, res) => res.send(req.params.name));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
//
// default options, no immediate parsing
app.use(busboy());
const busboyMiddleware = (req, res, next) => {
  if (req.busboy) {
    res.body = {};
    req.busboy.on(`file`, function (fieldname, file, filename) {
      res.body[fieldname] = filename;
      file.resume();
    });
    req.busboy.on(`field`, function (key, value) {
      res.body[key] = value;
    });
    req.busboy.on(`error`, next);
    req.busboy.on(`finish`, next);
    req.pipe(req.busboy);
  } else {
    next();
  }
};
app.post(`/wizards`, busboyMiddleware, (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
