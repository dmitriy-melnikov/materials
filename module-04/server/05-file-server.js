const http = require(`http`);
const url = require(`url`);
const fs = require(`fs`);
const {promisify} = require(`util`);

const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

const printDirectory = (path, files) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Directory content</title>
</head>
<body>
<ul>
    ${files.map((it) => `<li><a href="${it}">${it}</a></li>`).join(``)}
</ul>
</body>
</html>`;
};

const sendFile = (path, res) => {
  const fileStream = fs.createReadStream(path);

  fileStream.on(`error`, () => {
    fileStream.close();
    res.close();
  });
  res.on(`error`, () => {
    fileStream.close();
    res.close();
  });

  fileStream.pipe(res);
};

const readFile = async (path, res) => {
  res.setHeader(`content-type`, `text/plain`);
  sendFile(path, res);
};


const readDir = async (path, res) => {
  const files = await readdir(path);
  res.setHeader(`content-type`, `text/html`);
  res.end(printDirectory(path, files));
};


const hostname = `127.0.0.1`;
const port = 3000;

const server = http.createServer((req, res) => {
  const absolutePath = __dirname + url.parse(req.url).pathname;

  (async () => {
    try {
      const pathStat = await stat(absolutePath);
      console.log(pathStat);

      res.statusCode = 200;
      res.statusMessage = `OK`;

      if (pathStat.isDirectory()) {
        await readDir(absolutePath, res);
      } else {
        await readFile(absolutePath, res);
      }
    } catch (e) {
      res.writeHead(404, `Not Found`);
      res.end();
    }
  })().catch((e) => {
    res.writeHead(500, e.message, {
      'content-type': `text/plain`
    });
    res.end(e.message);
  });
});

const serverAddress = `http://${hostname}:${port}`;
server.listen(port, hostname, () => {
  console.log(`Server running at ${serverAddress}/`);
});
