var User = require('./models/user.js');
var Event = require('./models/event.js');

console.log('Event is ', Event);

module.exports = {

  getAllEvents: function(req, res, next) {
    Event
    .fetchAll({})
    .then(function(collection){
      res.json({data: collection.models});
    })
    .catch(function(error){
      console.log(error);
      res.send('Error at fetchAll');
    });
  },

  addEvent: function(req, res, next) {
    var data = req.body;
    new Event({
      event_name: data.eventName,
      num_of_people_joined: data.numOfPeopleJoined,
      total_number_of_people_req: data.totalPeople,
      price_per_person: data.pricePerPerson,
      description: data.description
    }).save()
      .then(function(){
      res.json("your data was posted to the database successfully");
    });
  }
};

//curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:8080/api/events

/**
 *    DummyData
 */

 //curl -H "Content-Type: application/json" -X POST -d '{"eventName":"matts guitar stuff","numOfPeopleJoined":"10", "totalPeople","20", "pricePerPerson":"30", "description":"Awesome event dude"}' http://localhost:3000/api/events
 
 //curl -H "Content-Type: application/json" -X POST -d '{"eventName":"Seattle Career Fair","numOfPeopleJoined":"2", "totalPeople":"20", "pricePerPerson":"30", "description":"Awesome event dude"}' http://localhost:3000/api/events
 
 //curl -H "Content-Type: application/json" -X POST -d '{"eventName":"Mini Medical School","numOfPeopleJoined":"10", "totalPeople":"20", "pricePerPerson":"30", "description":"Awesome event dude"}' http://localhost:3000/api/events
 
 //curl -H "Content-Type: application/json" -X POST -d '{"eventName":"Walla Walla Wine","numOfPeopleJoined":"10", "totalPeople":"20", "pricePerPerson":"30", "description":"Awesome event dude"}' http://localhost:3000/api/events
 
 //curl -H "Content-Type: application/json" -X POST -d '{"eventName":"Northwest Flower & Garden Show","numOfPeopleJoined":"10", "totalPeople":"20", "pricePerPerson":"30", "description":"Awesome event dude"}' http://localhost:3000/api/events
 




