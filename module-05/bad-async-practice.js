const app = require(`express`)();
const WIZARDS = [];
const NOT_FOUND_CODE = 404;

app.get(`/wizards/:name`, (req, res) => {

  (async () => {
    const wizardName = req.params.name;
    const found = WIZARDS.find((it) => it.name === wizardName);
    if (!found) {
      res.status(NOT_FOUND_CODE).send(`Wizard with name "${wizardName}" not found`);
    }
    res.send(found);
  })().catch((e) => res.status(500).send(e.message));
});
