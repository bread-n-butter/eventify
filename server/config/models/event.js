var db = require('../dbconfig.js');
require('./user.js');

var Event = db.Model.extend({
  tableName: 'events',
  users: function(){
    return this.belongsToMany('User');
  },
  creator: function(){
    return this.belongsTo('User', 'creator');
  }
});

module.exports = db.model('Event', Event);