var User = require('./models/user.js');
var Event = require('./models/event.js');

module.exports = {
  //TODO: fill these out
  /*signup: function(req, res, next){
    console.log('routing works cuz youre a genius');
    Event.fetchAll()
    .then(function(collection){
      res.json({data: collection});
    });
  },

  login: function(req, res){
    var data = req.body;
    Event.add({
      event_name: data.eventName,
      num_of_people_joined: data.numOfPeopleJoined,
      total_number_of_people_req: data.totalPeople,
      price_per_person: data.pricePerPerson,
      description: data.description
    });
  },*/

  logout: function(req, res){
    req.logout();
    res.redirect('/');
  }
};