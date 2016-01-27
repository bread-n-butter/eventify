var User = require('./models/user.js');
var Event = require('./models/event.js');

module.exports = {
  //TODO: fill these out
  // signup: function(req, res, next){

  // },

  // login: function(req, res){
  //   //set token?
  // },

  logout: function(req, res){
    req.logout();
    res.redirect('/');
  }
};