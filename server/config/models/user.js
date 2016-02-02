var db = require('../dbconfig.js');
var Event = require('./event.js');

var User = db.Model.extend({
  tableName: 'users',
  events: function(){
    return this.belongsToMany(Event);
  }
});

module.exports = User;