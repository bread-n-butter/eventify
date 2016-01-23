
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'eventify',
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

//Database schema

knex.schema.hasTable('users').then(function(exists){
  if(!exists) {
    knex.schema.createTable('users', function(users){
      users.increments('user_id').primary();
      users.string('first_name', 100);
      users.string('last_name', 100);
      users.integer('zipcode', 5);
      users.string('username').unique();
      users.string('facebook_token');
    }).then(function(table){
      console.log('Created Table', table);
    });
  }
});

knex.schema.hasTable('events').then(function(exists){
  if(!exists) {
    knex.schema.createTable('events', function(events){
      events.increments('event_id').primary();
      events.string('event_name');
      events.date('event_date');
      events.integer('num_of_people_joined');
      events.integer('total_number_of_people_req');
      events.integer('price_per_person');
      events.string('description');
      events.integer('creator').references('users.user_id');
    }).then(function(table){
      console.log('Created Table', table);
    });
  }
});

module.exports = bookshelf;



