const {validate} = require(`./validator`);
const schema = require(`./schema`);

const data = {
  name: `Say my name`
};

validate(data, schema);
