const http = require(`http`);

const hostname = `127.0.0.1`;
const port = 8080;


const handler = (req, res) => {
  res.statusCode = 200;
  res.setHeader(`Content-Type`, `text/plain`);
  res.end(`Hello World\n`);
};
const server = http.createServer();
server.on(`request`, handler);

server.listen(port, hostname, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Server running at http://${hostname}:${port}/`);
});
