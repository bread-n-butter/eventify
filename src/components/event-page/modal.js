import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import StripeCheckout from './payment';

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
    this.setState({ open: true });
    this.props.data.joinEvent(this.props.data);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  goBack() {
    this.context.router.goBack();
  }

  render() {
    const actions = [
      <FlatButton
        label="Later"
        secondary={ true }
        onClick={ this.handleClose }
      />,
      <StripeCheckout />
    ];

    return (
      <div className="">
        <RaisedButton primary={ true }
          label="Join"
          onClick={ this.handleOpen }
          style={ styles.button }
        />
        <Dialog
          title="It will be fun"
          actions={ actions }
          modal={ false }
          open={ this.state.open }
          onRequestClose={ this.handleClose }
        >
          <div className="center">
</div>
            </Dialog>
            <RaisedButton secondary={ true }
              label="Back"
              style={ styles.button }
              onClick={ this.goBack.bind(this) }
            />
          </div>
    );
  }
}
