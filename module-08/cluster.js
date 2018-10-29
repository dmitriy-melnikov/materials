const cluster = require(`cluster`);

const NUMBER_OF_PROCESSES = require(`os`).cpus().length;


if (cluster.isMaster) {

  console.log(NUMBER_OF_PROCESSES);

  for (let i = 0; i < NUMBER_OF_PROCESSES; i += 1) {
    cluster.fork();
  }

  cluster.on(`exit`, (worker) => {
    console.log(`Worker ${worker.id} died :(`);
    cluster.fork();
  });


} else {
  const express = require(`express`);
  const app = express();

  const measure = (req, res, next) => {
    const time = process.hrtime();
    next();
    const measured = process.hrtime(time);
    console.log(`Время ответа: ${measured[0]} секунд и ${measured[1]} наносекунд`);
  };
  app.use(measure);

  app.get(`/constant-time`, (req, res) => {
    const start = Date.now();

    let result = 1;

    res.send(`Всего я посчитал: ${result} элементов за ${Date.now() - start}мс`);
  });

  app.get(`/countToN/:n`, (req, res) => {
    const n = req.params.n;

    const start = Date.now();

    let result = 0;
    // n итераций
    for (let i = 0; i < n; i++) {
      console.log(`Iter ${i}`);
      result += 1;
    }

    res.send(`Всего я посчитал: ${result} элементов за ${Date.now() - start}мс`);
  });

  app.get(`/countToN2/:n`, (req, res) => {
    const n = req.params.n;

    const start = Date.now();

    let result = 0;
    // n**2 операций
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        console.log(`Iter ${i}.${j}`);
        result += 1;
      }
    }

    res.send(`Всего я посчитал: ${result} элементов за ${Date.now() - start}мс`);
  });

  app.listen(3000, () => console.log(`Example app listening on port 3000!`));
}

