var db = require('../dbconfig.js');

var Event = db.Model.extend({
  tableName: 'events',
  users: function(){
    return this.belongsToMany(User).through(users_joined_events);
  }
});

module.exports = Event;