import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';

const styles = {
  button: {
   margin: 12,
  },
};



export default class Buttons extends Component {

  render() {
    console.log(this);
    return (
      <div>
        <RaisedButton
          label="Join"
          onClick={this.props.joinEvent.bind(this, this.props.data)}
          style={ styles.button }
          primary={ true }
        />
        <RaisedButton
          label="Back"
          style={ styles.button }
          secondary={ true }
        />
      </div>
    );
  }
}
