process.env.NODE_ENV = 'test';

var expect = require('chai').expect;
var request = require('supertest');

var User = require('../server/config/models/user');
var Event = require('../server/config/models/event');

var data = require('./testData.json');
var testUser = data.users[0];
var testEvent = data.events[0];
var newUser = data.newUser; 

var server = require('../server/server.js');
var route = {
      users: '/api/users',
      events: '/api/events'
    };

describe('User Controller', function() {

  describe('Fetching all Users', function(){
    var users; 
    
    before(function(done){
      request(server.app)
      .get(route.users)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res){
        users = res.body.data;
        done();
      });
    });  

    it('Should return an array of users', function(){
      expect(users).to.be.an('array');
      expect(users).to.not.be.empty;
      expect(users[0]).to.have.property('first_name', testUser.first_name);
    })

  });


});