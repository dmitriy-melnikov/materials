const http = require(`http`);
const url = require(`url`);

const hostname = `127.0.0.1`;
const port = 3000;

const server = http.createServer((req, res) => {

  const requestedUrl = req.url;
  const headers = req.headers;
  const method = req.method;
  const parsedUrl = url.parse(requestedUrl, true);
  console.log(`Requested url: ${requestedUrl}`);
  console.log(parsedUrl);
  console.log(method);
  console.log(headers);

  res.statusCode = 200;
  res.statusMessage = `TEST`;
  res.setHeader(`Content-Type`, `text/plain`);
  res.writeHead(200);
  res.end(`Requested url: ${requestedUrl} with method ${method}
  Query: ${JSON.stringify(parsedUrl, null, 2)}
  Headers: ${JSON.stringify(headers, null, 2)}`);
});

server.listen(port, hostname, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server running at http://${hostname}:${port}/`);
});
