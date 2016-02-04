import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

const styles = {
  button: {
    margin: 12
  }
};

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  static contextTypes = {
    router: PropTypes.object
  };

  handleOpen = () => {
    this.setState({open: true});
    this.props.data.joinEvent(this.props.data);
  };

  handleClose = () => {
    this.setState({open: false});
  };

  goBack() {
    console.log(this);
    this.context.router.goBack();
  }

  render() {
    const actions = [
      <FlatButton
        label="Later"
        secondary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Now"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div className="">
        <RaisedButton primary={ true }
          label="Join"
          onClick={this.handleOpen}
          style={ styles.button }
        />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div className="center"> You can Pay Now or later</div>
            </Dialog>
            <RaisedButton secondary={ true }
              label="Back"
              style={ styles.button }
              onClick={this.goBack.bind(this)}
            />
          </div>
    );
  }
}
