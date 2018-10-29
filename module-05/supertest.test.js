const request = require(`supertest`);
const assert = require(`assert`);

const app = require(`./my-express-app`);

describe(`GET /users`, function () {
  it(`respond with json`, function () {
    return request(app).get(`/users`).set(`Accept`, `application/json`).
        expect(200).
        expect(`Content-Type`, /json/).
        then((response) => {
          const users = response.body;
          assert(users.length, 1);
          assert(users[0].name, `tobi`);
        });
  });
});
