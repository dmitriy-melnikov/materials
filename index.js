const rl = require('readline');
const readStr = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

readStr.on('line', line => {
  console.log(`line from input ${line.trim()}`);
  readStr.close();
}).on('close', () => {
  console.log('closing.....');
  process.exit()
}).on('error', (err) => {
  console.log(err.message);
  process.exit(1);
});