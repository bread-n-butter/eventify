var User = require('./models/user.js');
var Event = require('./models/event.js');

module.exports = {

  getAllUsers: function(req, res){
    User
    .fetchAll({})
    .then(function(collection){
      res.json({data: collection.models});
    })
    .catch(function(error){
      console.log(error);
      res.send('Error at fetchAll');
    });
  },

  getUser: function(req, res){
    var data = req.body;
    User
    .where({eamil_address: data.email})
    .fetch({require: true})
    .then(function(user){
      res.json({data: user.attributes})
    })
    .catch(function(error){
      console.log(error);
      res.send('Error at fetchUser');
    });
  },

  editUser: function(req, res){
    var data = req.body;
    User
    .where({id: data.userId})
    .fetch({require: true})
    .then(function(user){
      return user.save({
        first_name: data.firstName || user.get('first_name'),
        last_name: data.lastName || user.get('last_name'),
        zipcode: data.zipcode || user.get('zipcode'),
        email_address: data.email || user.get('email_address')      
      }, {method: 'update'});
    }).then(function(){
      res.sendStatus(200);
    }).catch(function(error){
      res.send('Error at editUser');
    });
  },

  addUser: function(req, res) {
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