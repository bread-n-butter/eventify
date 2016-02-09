if (process.env.NODE_ENV !== 'production') {
  var LOCAL = require('../authConfig.js');
}

var SECRET = process.env.STRIPE || LOCAL.stripe.stripeSecret;

var stripe = require('stripe')(SECRET);

module.exports = {
  payForEvent: function(req, res) {
    var stripeToken = req.body.stripeToken;
    var amount = req.body.event.price_per_person;
    var description = req.body.event.event_name;

    stripe.charges.create({
      currency: 'usd',
      amount: amount + '00',
      source: stripeToken.id,
      description: description
    })
    .then(function(result) {
      res.json(result);
    })
    .catch(function(err) {
      res.json(err);
    });
  }
};
