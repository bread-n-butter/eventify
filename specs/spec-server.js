'use strict';

var test = require('tape');
var request = require('supertest');
var app = require('../server/server.js');

test('Correct users returned', function (t) {
  request(app)
    .get('/api/users')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      t.end();
    });
});


