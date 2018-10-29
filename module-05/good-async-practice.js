const app = require(`express`)();
const WIZARDS = [];
const NOT_FOUND_CODE = 404;

const async = (fn) => (req, res, next) => fn(req, res, next).catch(next);

app.get(`/wizards/:name`, async(async (req, res) => {
  const wizardName = req.params.name;

  const found = WIZARDS.find((it) => it.name === wizardName);
  if (!found) {
    res.status(NOT_FOUND_CODE).send(`Wizard with name "${wizardName}" not found`);
  }
  res.send(found);
}));
