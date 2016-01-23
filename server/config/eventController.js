var User = require('./models/user.js');
var Event = require('./models/event.js');

module.exports = {

  getAllEvents: function(req, res, next){
    console.log('routing works cuz youre a genius');
    Event.fetchAll()
    .then(function(collection){
      res.json({data: collection});
    });
  },

  addEvent: function(req, res, next){
    var data = req.body;
    Event.add({
      event_name: data.eventName,
      num_of_people_joined: data.numOfPeopleJoined,
      total_number_of_people_req: data.totalPeople,
      price_per_person: data.pricePerPerson,
      description: data.description
    });
  }
};