import React, { Component, PropTypes } from 'react';
import StripeCheckout from './payment';
import FlatButton from 'material-ui/lib/flat-button';

const styles = {
  button: {

  }
};

export default class Buttons extends Component {

  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  userEvent() {
    return this.props.joined.reduce((result, item) => {
      if(item.id === this.props.data.id) {
        result = true;
      }
      return result;
    }, false);
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
    // Created events
    if(this.props.user.id === this.props.data.creator){
      return (
        <div style={{marginLeft: '1.3rem'}}>
          <FlatButton
            style={{color: '#db436c'}}
            label="edit"
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

      //Joined events
    } else if(this.userEvent()) {
      return (
        <div>
          <FlatButton
            style={{color: '#db436c'}}
            label="un-join"
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

    return (
      <div>
          <StripeCheckout
            style={ styles.button }
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
