var db = require('../dbconfig.js');

var User = db.Model.extend({
  tableName: 'users',
  events: function(){
    return this.belongsToMany(Event).through(users_joined_events);
  }
});

module.exports = User;