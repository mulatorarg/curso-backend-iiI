import mongoose from 'mongoose';

import request from "supertest";

const desde = "[TEST.SUPERTEST]";
const apiURL = "http://localhost:8003/api/users";
const idTest = "";

describe("Tests de Usuarios", () => {

  beforeAll(async () => {
    await mongoConnection(`${desde} `);
    await mongoose.connection.collections["usuarios"].drop();
  });

  it('GET /user', (done) => {
    it('responds with json', function(done) {
      request(app)
        .get('/user')
        .auth('username', 'password')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });


  /*
  test('Recuperar listado de Usuario', async () => {
    const response = await fetch(apiURL);
    const responseGet = await response.json();
    assert.strictEqual(Array.isArray(responseGet), true);
    assert.equal(responseGet.length, '> 0');
  });
  */

});
