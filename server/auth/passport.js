var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

// load up the user model
// TODO: change this to query using Bookshelf/mySQL
var User = require('../config/models/user');

// load the auth variables
var isDevelopment = (process.env.NODE_ENV !== 'production');

module.exports = function(passport) {

  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session

  passport.serializeUser(function(user, done) {
    return done(null, user.attributes.user_id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(obj, done) {
    new User({user_id: obj})
      .fetch()
      .then(function(user) {
        return done(null, user);
      }, function(error){
        return done(error);
      });
  });

  /*passport.use('local-signup', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  function(req, username, password, done) {
    // asynchronous
    // User.findOne wont fire unless data is sent back
    process.nextTick(function() {
      // find a user whose email is the same as the forms email
      // we are checking to see if the user trying to login already exists
      new User({'username': username})
        .fetch()
        .then(function(model) {
          if (model) {
      //TODO: REPLACE FLASH MESSAGE
            req.flash('signupMessage', 'That username is already taken.');
          } else {
            // if there is no user with that email create the user
            new User({
              username: username,
              //TODO: ENCRYPT PASSWORD
              password: password
            }).save()
              .then(function(model) {
                console.log('New user saved', model);
              }, function(error) {
                console.log('error');
              });
          }
        });
    });
  }));*/

  // =========================================================================
  // LOCAL LOGIN =============================================================
  // =========================================================================

 /* passport.use('local-login', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  function(req, email, password, done) { // callback with email and password from our form
    // find a user whose email is the same as the forms email
    // we are checking to see if the user trying to login already exists
    new User({'username': username})
      .fetch() //TODO: will this fail if there is no username, or will it just pass 'null'?
      .then(function(model))

            return done(err);

        // if no user is found, return the message
        if (!user)
            return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

        // if the user is found but the password is wrong
        if (!user.validPassword(password))
            return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

        // all is well, return successful user
        return done(null, user);
    });

  }));*/

  // =========================================================================
  // FACEBOOK ================================================================
  // =========================================================================
  if (isDevelopment) {
    var configAuth = require ('../config/authConfig');
    passport.use(new FacebookStrategy({
      // pull in our app id and secret from our authConfig.js file
      clientID        : configAuth.facebookAuth.clientID,
      clientSecret    : configAuth.facebookAuth.clientSecret,
      callbackURL     : configAuth.facebookAuth.callbackURL
    },
      // facebook will send back the token and profile
      function(token, refreshToken, profile, done) {
        // asynchronous
        process.nextTick(function() {
          console.log('looking for user from fb');

          // find the user in the database based on their facebook id
          new User({ 'facebook_id' : profile.id })
            .fetch()
            .then(function(userModel) {
              if (userModel) {
                return done(null, userModel);
              } else {
                new User({
                  //TODO: make the db schema match these fields
                  facebook_id: profile.id,
                  facebook_token: token,
                  first_name: profile.name.givenName,
                  last_name: profile.name.familyName
                }).save()
                  .then(function(model) {
                    console.log('New user saved', model);
                    return done(null, model);
                  }, function(error) {
                    console.log('Error saving new user: ', error);
                    return done(error);
                  });
              }
            }, function(error) {
              console.log('Error: ', error);
              return done(error);
            });
        });

      }));
  } else {
    passport.use(new FacebookStrategy({
      // pull in our app id and secret from our authConfig.js file
      clientID        : process.env.FACEBOOK_APP_ID,
      clientSecret    : process.env.FACEBOOK_SECRET,
      callbackURL     : 'https://breadnbutter.herokuapp.com/api/auth/facebook/callback'
    },
      // facebook will send back the token and profile
      function(token, refreshToken, profile, done) {
        // asynchronous
        process.nextTick(function() {
          console.log('looking for user from fb');

          // find the user in the database based on their facebook id
          new User({ 'facebook_id' : profile.id })
            .fetch()
            .then(function(userModel) {
              if (userModel) {
                return done(null, userModel);
              } else {
                new User({
                  //TODO: make the db schema match these fields
                  facebook_id: profile.id,
                  facebook_token: token,
                  first_name: profile.name.givenName,
                  last_name: profile.name.familyName
                }).save()
                  .then(function(model) {
                    console.log('New user saved', model);
                    return done(null, model);
                  }, function(error) {
                    console.log('Error saving new user: ', error);
                    return done(error);
                  });
              }
            }, function(error) {
              console.log('Error: ', error);
              return done(error);
            });
        });

      }));
  }

};