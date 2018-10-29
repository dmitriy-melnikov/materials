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

table.once(`ping`, ping);
table.once(`ping`, ping);
table.once(`ping`, ping);
table.once(`ping`, ping);
table.once(`ping`, ping);
table.once(`ping`, ping);
table.once(`ping`, ping);
table.once(`ping`, ping);
table.once(`ping`, ping);
table.once(`ping`, ping);
table.once(`ping`, ping);
table.once(`ping`, ping);
table.once(`pong`, pong);
table.once(`pong`, pong);
table.once(`pong`, pong);
table.once(`pong`, pong);
table.once(`pong`, pong);
table.once(`pong`, pong);
table.once(`pong`, pong);
table.once(`pong`, pong);
table.once(`pong`, pong);
table.once(`pong`, pong);
table.once(`pong`, pong);
table.once(`pong`, pong);
table.once(`pong`, pong);

table.emit(`ping`, {round: 0});
