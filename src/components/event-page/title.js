import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    return (
      <section>
        <h2>{this.props.data.event_name}</h2>
      </section>
    );
  }
}
