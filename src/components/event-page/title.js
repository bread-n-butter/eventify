import React, { Component } from 'react';

const styles = {
  'fontFamily': 'GillSans, Calibri, Trebuchet, sans-serif'
};

export default class Title extends Component {
  render() {
    return (
      <section className='center-align' style={styles}>
        <h2>{this.props.data.event_name}</h2>
      </section>
    );
  }
}
