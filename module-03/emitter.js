const EventEmitter = require(`events`);

class StartupEmitter extends EventEmitter {
  constructor() {
    super();
    //process.nextTick(() => this.emit(`startup`, `hello`));
    setImmediate(() => {
      this.emit(`startup`, `hello`);
    });

  }
}
//process.on('uncaughtException', err => console.log(`some error: ${err}`));
//process.on('uncaughtException', err => console.log(err));
const startupEmitter = new StartupEmitter();
//startupEmitter.on('error', (err) => console.log(err.message));
//startupEmitter.on('uncaughtException', err => console.log(err.message));
startupEmitter.on(`startup`, data => console.log(data));
/*startupEmitter.on(`startup`, data => {
  throw new Error(data);
});*/

//setTimeout(() => console.log('code run'), 500);

//notExistFunc();
//console.log('this code not run');

