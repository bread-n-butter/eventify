var db = require('../dbconfig.js');

var EventUser = db.Model.extend({
  tableName: 'events_users',
});

module.exports = EventUser;