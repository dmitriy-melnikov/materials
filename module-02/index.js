const child = require(`./child`);
child.callMe();
console.log(child.name);

console.log(__filename, __dirname);