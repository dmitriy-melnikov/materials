const EventEmitter = require(`events`);

class PingPongTable extends EventEmitter {

}

const table = new PingPongTable();

const ping = async (ball) => {
  await Promise.resolve();
  console.log(`Round ${ball.round++}: Got a ball on a ping side`);
  table.emit(`pong`, ball);
};

const pong = async (ball) => {
  await Promise.resolve();
  console.log(`Round ${ball.round++}: Got a ball on a pong side`);
  table.emit(`ping`, ball);
};

table.on(`ping`, ping);
table.on(`pong`, pong);

table.emit(`ping`, {round: 0});
