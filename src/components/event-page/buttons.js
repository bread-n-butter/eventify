import React, { Component, PropTypes } from 'react';
import StripeCheckout from './payment';
import FlatButton from 'material-ui/lib/flat-button';

export default class Buttons extends Component {

  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  userEvent() {
    if (this.props.joined) {
      return this.props.joined.reduce((result, item) => {
        if(item.id === this.props.data.id) {
          result = true;
        }
        return result;
      }, false);
    }

    return false;
  }

  goBack() {
    this.context.router.goBack();
  }

  delete() {
    this.props.delete(this.props.data.id);
    this.context.router.goBack();
  }

  unjoin() {
    const data = {
      userId: this.props.user.id,
      eventId: this.props.data.id
    };

    this.props.unjoinEvent(data);
    this.context.router.push('/dashboard');
  }

  edit() {
    this.context.router.push('/edit/' + this.props.data.id);
  }

  render() {
    // Buttons displayed if the user is the creator of the event
    if(this.props.user.id === this.props.data.creator){
      return (
        <div style={{marginLeft: '1.3rem'}}>
          <FlatButton
            style={{color: '#db436c'}}
            label="Edit"
            onClick={ this.edit.bind(this) }
          />
          <FlatButton
            style={{color: '#53b3cb'}}
            label="Delete"
            onClick={ this.delete.bind(this) }
          />
          <FlatButton
            style={{color: 'gray'}}
            label="Back"
            onClick={ this.goBack.bind(this) }
          />
        </div>
      );

    // Buttons displayed if the has joined the event
    } else if(this.userEvent()) {
      return (
        <div>
          <FlatButton
            style={{color: '#db436c'}}
            label="Un-join"
            onClick={this.unjoin.bind(this)}
          />
          <FlatButton
            className='left-align'
            style={{color: 'gray'}}
            label="Back"
            onClick={ this.goBack.bind(this) }
          />
        </div>
      );
    }
    // Buttons displayed if the user is not the creator and has not yet joined the event
    return (
      <div>
          <StripeCheckout
            pay={ this.props.pay }
            event={ this.props.data }
            join={ this.props.joinEvent }
            user={ this.props.user }
            back={ this.goBack }
          />

          <FlatButton
            style={{color: 'gray'}}
            label="Back"
            onClick={ this.goBack.bind(this) }
          />

      </div>
    );
  }
}
