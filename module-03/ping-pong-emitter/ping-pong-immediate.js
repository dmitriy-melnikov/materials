const EventEmitter = require(`events`);

class PingPongTable extends EventEmitter {

}

const table = new PingPongTable();

const ping = (ball) => {
  console.log(`Round ${ball.round++}: Got a ball on a ping side`);
  table.emit(`pong`, ball);
};

const pong = (ball) => {
  console.log(`Round ${ball.round++}: Got a ball on a pong side`);
  table.emit(`ping`, ball);
};

table.on(`ping`, (...args) => setImmediate(() => ping(...args)));
table.on(`pong`, (...args) => setImmediate(() => pong(...args)));

table.emit(`ping`, {round: 0});
