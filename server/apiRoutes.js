var eventController = require('./config/controllers/eventController.js');
var userController = require('./config/controllers/userController.js');
var stripeController = require('./config/controllers/stripeController.js');
var aws = require ('aws-sdk');

var isDevelopment = (process.env.NODE_ENV !== 'production');
if (isDevelopment) {
  var config = require('./config/authConfig');
}

module.exports = function (apiRouter, passport) {
/**********************************************************
*************** API Routing for DB Querying ***************
***********************************************************/
  apiRouter.post('/payments', stripeController.payForEvent);
  apiRouter.get('/events', eventController.getAllEvents);
  apiRouter.post('/events', eventController.addEvent);

  apiRouter.get('/events/:eventId', eventController.getEvent);
  apiRouter.put('/events/:eventId', eventController.editEvent);
  apiRouter.delete('/events/:eventId', eventController.deleteEvent);
  apiRouter.get('/events/:eventId/users', userController.getAllUsersForEvent);

  apiRouter.post('/users', userController.addUser);
  apiRouter.get('/users', userController.getAllUsers);
  apiRouter.get('/users/:email', userController.getUser);
  apiRouter.put('/users/:userId', userController.editUser);
  apiRouter.delete('/users/:userId', userController.deleteUser);

  apiRouter.get('/events/:userId/createdevents', eventController.getAllCreatedEvents);
  apiRouter.get('/events/:userId/joinedevents', eventController.getAllJoinedEvents);

  apiRouter.post('/events/:eventId/:userId', eventController.joinEvent);
  apiRouter.delete('/events/:eventId/:userId', eventController.unjoinEvent);

/************************************************
************** Authentication *******************
*************************************************/

  apiRouter.get('/loggedin', function(req, res) {
    if (req.isAuthenticated()) {
      var user = req.user.attributes;
      user.isLoggedIn = true;
      res.send(user);
    } else {
      res.send({ isLoggedIn: false });
    }
  });

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
      req.logout();
      res.end();
    });

  apiRouter.get('/s3/sign', function(req, res){
    var accessKey, secretAccessKey;
    if (isDevelopment) {
      accessKey =  config.aws.AWS_ACCESS_KEY;
      secretAccessKey = config.aws.AWS_SECRET_KEY;
    } else {
      accessKey = process.env.AWS_ACCESS_KEY;
      secretAccessKey = process.env.AWS_SECRET_KEY;
    }
    aws.config.update({
      accessKeyId: accessKey,
      secretAccessKey: secretAccessKey
    });
    var s3 = new aws.S3();
    var s3_params = {
      Bucket: 'eventify-photos',
      Key: req.query.file_name,
      Expires: 60,
      ContentType: req.query.file_type,
      ACL: 'public-read'
    };
    s3.getSignedUrl('putObject', s3_params, function(err, data){
      if(err){
        console.log(err);
      }
      else{
        var return_data = {
          signed_request: data,
          url: 'https://eventify-photos.s3.amazonaws.com/'+req.query.file_name
        };
        res.write(JSON.stringify(return_data));
        res.end();
      }
    });
  });
/**************************************************************
*************** Making url params accessible to req.body ****** 
***************************************************************/
  apiRouter.param('eventId', function(req, res, next, eventId){
    req.body.eventId = eventId;
    next();
  });


  apiRouter.param('userId', function(req, res, next, userId){
    req.body.userId = userId;
    next();
  });

  apiRouter.param('email', function(req, res, next, email){
    req.body.email = email;
    next();
  });


};
