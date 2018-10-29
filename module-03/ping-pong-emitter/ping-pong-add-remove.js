const EventEmitter = require(`events`);

class PingPongTable extends EventEmitter {

}

const table = new PingPongTable();

const ping = (ball) => {
  table.removeListener(`ping`, ping);

  console.log(`Round ${ball.round++}: Got a ball on a ping side`);
  table.emit(`pong`, ball);
};

const pong = (ball) => {
  table.removeListener(`pong`, pong);

  console.log(`Round ${ball.round++}: Got a ball on a pong side`);
  table.emit(`ping`, ball);
};

table.addListener(`ping`, ping);
table.addListener(`pong`, pong);

table.emit(`ping`, {round: 0});
