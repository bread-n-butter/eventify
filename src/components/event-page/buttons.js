import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import StripeCheckout from './payment';
import FlatButton from 'material-ui/lib/flat-button';

const styles = {
  button: {
    margin: 12
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

  edit() {
    this.context.router.push('/edit/' + this.props.data.id);
  }

  render() {
    // Created events
    //
    if(this.props.user.id === this.props.data.creator){
      return (
        <div>
          <FlatButton 
            label="edit"
            onClick={ this.edit.bind(this) }
          />
          <FlatButton 
            label="Back"
            onClick={ this.goBack.bind(this) }
          />
          <FlatButton
            label="Delete"
            onClick={ this.delete.bind(this) }
          />
        </div>
      );

      //Joined events
    } else if(this.userEvent()) {
      return (
        <div>
          <RaisedButton primary={ true }
            label="un-join"
            style={ styles.button }
            onClick={this.goBack.bind(this)}
          />
          <RaisedButton secondary={ true }
            label="Back"
            style={ styles.button }
            onClick={ this.goBack.bind(this) }
          />
        </div>
      );
    }

    return (
      <div className="row">
        <div className="col s4 push-s5">

          <StripeCheckout
            style={ styles.button }
            pay={ this.props.pay }
            event={ this.props.data }
            join={ this.props.joinEvent }
            user={ this.props.user }
          />
        </div>
        <div className="col s5 push-s3">

          <RaisedButton secondary={ true }
            label="Back"
            onClick={ this.goBack.bind(this) }
          />
        </div>
      </div>
    );
  }
}
