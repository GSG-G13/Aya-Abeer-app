/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

test('Get /data status 200 html get data', (done) => {
  request(app)
    .get('/data')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      return done();
    });
});

test('Get / status 200 html get data', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      return done();
    });
});
