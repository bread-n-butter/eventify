import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import StripeCheckout from '../../helpers/stripeLoader';

export default class StripeButton extends Component {
  onToken(token) {
    const join = this.props.join;

    const joinData = {
      userId: this.props.user.id,
      eventId: this.props.event.id
    };

    const res = {
      stripeToken: token,
      event: this.props.event
    };
    this.props.pay(res)
    .then(function(){
      join(joinData);
    });
  }

  render() {
    // const price = this.event.
    const price = this.props.event.price_per_person + '00';
    return (
        <StripeCheckout
          name="Eventify"
          description={this.props.event.description}
          image="http://i65.tinypic.com/2h4f3w2.png"
          componentClass="div"
          panelLabel="JOIN"
          amount={parseInt(price)}
          currency="USD"
          stripeKey="pk_test_tN8kZCNIKAnsR0sDFAXTgr2c"
          locale="en"
          email="eventify@eventify.com"
          shippingAddress={false}
          billingAddress={false}
          zipCode={true}
          alipay={false}
          bitcoin={true}
          allowRememberMe={true}
          token={this.onToken.bind(this)}>
          <RaisedButton primary={ true }
            label="Join"
          />
        </StripeCheckout>
    );
  }
}
