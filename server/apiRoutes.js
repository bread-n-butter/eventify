var eventController = require('./config/eventController.js');

module.exports = function (apiRouter) {

  apiRouter.get('/events', eventController.getAllEvents);
  apiRouter.post('/events', eventController.addEvent);

};