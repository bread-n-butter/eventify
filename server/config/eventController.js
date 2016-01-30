var User = require('./models/user.js');
var Event = require('./models/event.js');

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

  editEvent: function(req, res){
    var data = req.body; 
    Event
    .forge({event_id: data.eventId})
    .fetch({require: true})
    .then(function(event){
      event.save({
        event_name: data.eventName || event.get('event_name'),
        event_date: data.date || event.get('event_date'),
        num_of_people_joined: data.numOfPeopleJoined || event.get('num_of_people_joined'),
        total_number_of_people_req: data.totalPeople || event.get('total_number_of_people_req'),
        price_per_person: data.pricePerPerson || event.get('price_per_person'),
        description: data.description || event.get('description'),
        image_url: data.image || event.get('image_url')
      });
    });
  },

  addEvent: function(req, res, next) {
    var data = req.body;
    new Event({
      event_name: data.eventName,
      event_date: data.date,
      num_of_people_joined: data.numOfPeopleJoined,
      total_number_of_people_req: data.totalPeople,
      price_per_person: data.pricePerPerson,
      description: data.description,
      image_url: data.image,
      creator: data.userId
    }).save()
      .then(function(){
        res.json('your data was posted to the database successfully');
      });
  }
};

//curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:8080/api/events

/**
 *    DummyData
 */

 //curl -H "Content-Type: application/json" -X POST -d '{"eventName":"third test party","numOfPeopleJoined":"30", "totalPeople": "30", "pricePerPerson":"30", "description":"will test work", "userId": "1"}' http://localhost:3000/api/events

 //curl -H "Content-Type: application/json" -X POST -d '{"firstName":"Kristen","lastName":"Haydel"}' http://localhost:3000/api/users

 //curl -H "Content-Type: application/json" -X POST -d '{"eventName":"Mini Medical School","numOfPeopleJoined":"10", "totalPeople":"20", "pricePerPerson":"30", "description":"Awesome event dude"}' http://localhost:3000/api/events

 //curl -H "Content-Type: application/json" -X POST -d '{"eventName":"Walla Walla Wine","numOfPeopleJoined":"10", "totalPeople":"20", "pricePerPerson":"30", "description":"Awesome event dude"}' http://localhost:3000/api/events

 //curl -H "Content-Type: application/json" -X POST -d '{"eventName":"Northwest Flower & Garden Show","numOfPeopleJoined":"10", "totalPeople":"20", "pricePerPerson":"30", "description":"Awesome event dude"}' http://localhost:3000/api/events





