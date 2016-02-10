import React, { Component, PropTypes } from 'react';

export default class JoinUserCard extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    const user = this.props.user;
    return (
      <li className="collection-item avatar valign-wrapper">
        <img
          src={'http://lorempixel.com/200/200/'}
          alt={'thumbnail for ' + user.first_name}
          className="circle"
          />
        <ul>
          <li
            className="title"
            style={{display: 'block'}}>
            <b>{user.first_name} {user.last_name}</b>
          </li>
        </ul>

      </li>
    );
  }
}
