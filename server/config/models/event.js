var db = require('../dbconfig.js');

var Event = db.Model.extend({
  tableName: 'events',
  users: function(){
    return this.belongsToMany(User);
  },
  creator: function(){
    return this.belongsTo(User, 'creator');
  }
});

module.exports = Event;