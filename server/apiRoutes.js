var eventController = require('./config/eventController.js');
var authController = require('./config/authController.js');

module.exports = function (apiRouter, passport) {
  //TODO: check if user is logged in for get and post event calls
  //Don't we need a route to '/'?
  apiRouter.get('/events', eventController.getAllEvents);
  apiRouter.post('/events', eventController.addEvent);

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
  apiRouter.get('/auth/logout', function(req, res) {
    req.logout();
    res.redirect('/#/');
  });

  function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    console.log('isauthed?', req.isAuthenticated());
    if (req.isAuthenticated())
      return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
  }

};
