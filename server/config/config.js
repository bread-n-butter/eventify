var bookshelf = required('bookshelf');

var knex = require('knex')({
  client: 'mysql',
  connection: process.env.MYSQL_DATABASE_CONNECTION || {
    host     : '127.0.0.1',
    user     : '',
    password : '',
    database : 'eventify',
    charset  : 'utf8'
  }
});

knex.schema.createTableIfNotExists('users', function(table){
  table.increments('user_id').primary();
  table.string('first_name');
  table.string('last_name');
  table.integer('zipcode');
  table.string('username');
  table.string('facebook_token');
});

knex.schema.createTableIfNotExists('events', function(table){
  table.increments('event_id').primary();
  table.string('event_name');
  table.date('event_date');
  table.integer('num_of_people_joined');
  table.integer('total_number_of_people_req');
  table.integer('price_per_person');
  table.string('description');
});

var User = bookshelf.Model.extend({
  tableName: 'users',
  events: function(){
    return this.belongsToMany(Event).through(users_events);
  }
});

var Event = bookshelf.Model.extend({
  tableName = 'events',
  users: function(){
    return this.belongsToMany(User).through(users_events);
  }
});