// expose our config directly to our application using module.exports
module.exports = {
  'facebookAuth' : {
    'clientID'      : '434436376751407', //App ID
    'clientSecret'  : 'be92c735cc5b53ee74f0bf7c959020fe', //App Secret
    'callbackURL'   : 'http://localhost:3000/api/auth/facebook/callback'
  },
  'localAuth' : {
    'secret'        : 'aslq093458aer234324kfjawq35u93q35'
  }
};
