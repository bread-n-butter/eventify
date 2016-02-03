process.env.NODE_ENV = 'test';

var expect = require('chai').expect;
var request = require('supertest');

var User = require('../server/config/models/user');
var Event = require('../server/config/models/event');

var app = require('../server/server.js').app;
var route = {
      users: '/api/users',
      events: '/api/events'
    };

describe('Event Controller', function() {


  describe('addEvent', function(){
    it('returns status 200', function(){});
  });


});