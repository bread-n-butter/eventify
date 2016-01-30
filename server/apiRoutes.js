var eventController = require('./config/eventController.js');
var userController = require('./config/userController.js');
var authController = require('./config/authController.js');

module.exports = function (apiRouter, passport) {
  apiRouter.get('/events', eventController.getAllEvents);
  apiRouter.post('/events', eventController.addEvent);

  apiRouter.put('/events/:eventId', eventController.editEvent);

  apiRouter.post('/users', userController.addUser);

  apiRouter.get('/loggedin', function(req, res) { res.send({ isLoggedIn: req.isAuthenticated() }); });

  apiRouter.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email ', 'public_profile', 'user_friends']}));

  apiRouter.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      failureRedirect: '/#/',
      failureFlash: true
    }), function(req, res) {
      res.redirect('/#/dashboard/');
    });

  /*Local auth routes:
  apiRouter.post('/auth/signup', passport.authenticate('local-signup', {
    successRedirect : '/events', // redirect to the secure events section
    failureRedirect : '/', // redirect back to the home page if there is an error
    failureFlash : true // allow flash messages
  }));
  apiRouter.post('/auth/login', authController.login);*/

  apiRouter.get('/auth/logout',
    function (req, res) {
      console.log('logging out');
      req.logout();
      res.end();
    });

/*
  function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    console.log('isauthed?', req.isAuthenticated());
    if (req.isAuthenticated())
      return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
  }*/

  apiRouter.param('eventId', function(){
    req.body.eventId = eventId;
  });


};
