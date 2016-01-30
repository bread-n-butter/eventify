var User = require('./models/user.js');
var Event = require('./models/event.js');

module.exports = {

  addUser: function(req, res, next) {
    var data = req.body;
    new User({
      first_name: data.firstName,
      last_name: data.lastName,
      zipcode: data.zipcode,
      facebook_id: data.fbId,
      username: data.username,
      facebook_token: data.fbToken
    }).save()
      .then(function(){
        res.json('the user was added to the db successfully')
      });
  }
};