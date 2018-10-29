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
  table.emit(`error`, new Error(`Whoops!`));
  // throw new Error(`Pong error`);
  table.emit(`ping`, ball);
};

table.on(`ping`, ping);
table.on(`ping`, ping);
table.on(`ping`, ping);
table.on(`ping`, ping);
table.on(`ping`, ping);
table.on(`ping`, ping);
table.on(`ping`, ping);
table.on(`ping`, ping);
table.on(`ping`, ping);
table.on(`ping`, ping);
table.on(`ping`, ping);
table.on(`ping`, ping);
table.on(`ping`, ping);
table.on(`ping`, ping);
table.on(`ping`, ping);
table.on(`pong`, pong);
// table.on(`error`, (e) => console.log(e.message));

table.emit(`ping`, {round: 0});
