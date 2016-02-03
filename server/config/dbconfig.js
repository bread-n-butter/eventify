
var knex = require('knex')({
  client: 'mysql',
  connection: process.env.DATABASE_URL || {
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'eventify',
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);
//plugin to handle circular references in bookshelf
bookshelf.plugin('registry');

//Database schema

knex.schema.hasTable('users').then(function(exists){
  if(!exists) {
    knex.schema.createTable('users', function(users){
      users.increments();
      users.string('first_name', 100);
      users.string('last_name', 100);
      users.integer('zipcode', 5);
      users.string('facebook_id');
      users.string('username').unique();
      users.string('facebook_token');
      users.string('email_address');
    }).then(function(table){
      console.log('Created Table', table);
    });
  }
});

knex.schema.hasTable('events').then(function(exists){
  if(!exists) {
    knex.schema.createTable('events', function(events){
      events.increments();
      events.string('event_name', 100);
      events.dateTime('event_date');
      events.integer('num_of_people_joined');
      events.integer('total_number_of_people_req');
      events.integer('price_per_person');
      events.string('description', 250);
      events.string('image_url');
      events.integer('creator').references('users.id');
      events.integer('creator_first_name').references('users.first_name');
      events.integer('creator_last_name').references('users.last_name');
      //.notNullable();
    }).then(function(table){
      console.log('Created Table', table);
    });
  }
});

knex.schema.hasTable('events_users').then(function(exists){
  if(!exists) {
    knex.schema.createTable('events_users', function(table){
      table.integer('user_id').references('users.id');
      table.integer('event_id').references('events.id');
    }).then(function(table){
      console.log('Create Table', table);
    });
  }
});

module.exports = bookshelf;



