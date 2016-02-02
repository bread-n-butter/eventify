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
    return (
      <div>
        <RaisedButton label="Join" style={styles.button} primary={true} />
        <RaisedButton label="Back" style={styles.button} secondary={true} />
      </div>
    );
  }
}
