var db = require('../dbconfig.js');
require('./event.js');

var User = db.Model.extend({
  tableName: 'users',
  events: function(){
    return this.belongsToMany('Event');
  }
});

module.exports = db.model('User', User);