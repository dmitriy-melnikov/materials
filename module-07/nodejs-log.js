const util = require(`util`);
const debug = util.debuglog(`nodejs-log`);

console.log(`${Date.now()} Привет, лог!`);
console.error(`${Date.now()} Привет, лог!`, {context: `hello`});
// NODE_DEBUG=my-app
debug(`Это сообщение появится только в режиме дебага`, {context: `hello`});

