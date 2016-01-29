var User = require('./models/user.js');
var Event = require('./models/event.js');

module.exports = {
  //TODO: fill these out for local login/signup
  // signup: function(req, res, next){

  // },

  // login: function(req, res){
  //   //set token?
  // },

  logout: function(req, res){
    console.log('logging out');
    req.logout();
    res.redirect('/');
  }
};