const createImmediate = (name, inner = () => {}) => {
  setImmediate(() => {
    console.log(`Executed immediate ${name}`);

    inner(name);
  });
};

const createTimeout = (name, inner = () => {}) => {
  setTimeout(() => {
    console.log(`Executed timeout ${name}`);

    inner(name);
  }, 0);
};

createTimeout(`main`, (parent) => {
  createImmediate(`${parent} => inside timeout`);
  createTimeout(`${parent} => inside timeout`);
});

createImmediate(`main`);
