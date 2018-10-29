const EventEmitter = require(`events`);

class StartupEmitter extends EventEmitter {
  constructor() {
    super();
    setImmediate(() => {
      this.emit(`startup`, `hello`);
    });
  }
}

const startupEmitter = new StartupEmitter();
startupEmitter.on(`uncaughtException`, (err) => console.log(err.message));
startupEmitter.on(`startup`, (data) => {
  throw new Error(data);
});
