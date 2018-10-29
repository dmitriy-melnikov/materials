const http = require(`http`);
const fs = require(`fs`);
const {promisify} = require(`util`);
const readfile = promisify(fs.readFile);

const hostname = `127.0.0.1`;
const port = 3000;

const readFile = (path, res) => {
  readfile(path).then((data) => {
    data = data.toString(`utf8`);
    console.log(data.length);
    const length = Buffer.from(data, `utf8`).length;
    console.log(length);
    res.setHeader(`content-length`, length);
    res.end(data);
  }).catch((e) => {
    console.error(e);
    res.end();
  });
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader(`Content-Type`, `text/html`);
  readFile(__dirname + `/index.html`,res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
