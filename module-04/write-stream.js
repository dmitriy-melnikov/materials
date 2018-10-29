const fs = require(`fs`);

const stream = fs.createWriteStream(`example.txt`);
stream.on(`error`, (err) => console.error(err.message));
stream.write(`hello, `);
stream.end(`world!`);

stream.write(`Hi!`);
