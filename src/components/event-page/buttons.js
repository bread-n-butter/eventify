import React, { Component, PropTypes } from 'react';
import Modal from './modal';
import RaisedButton from 'material-ui/lib/raised-button';

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
    this.context.router.push('/edit');
  }

  render() {
    // Created events
    if(this.props.user.id === this.props.data.creator){
      return (
        <div>
          <RaisedButton
            label="Delete"
            style={ styles.button }
            onClick={ this.delete.bind(this) }
          />
          <RaisedButton primary={ true }
            label="edit"
            style={ styles.button }
            onClick={ this.edit.bind(this) }
          />
          <RaisedButton secondary={ true }
            label="Back"
            style={ styles.button }
            onClick={ this.goBack.bind(this) }
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
      <div className="">
        <Modal data={ this.props } />
      </div>
    );
  }
}
