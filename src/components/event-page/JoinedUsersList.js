import React, { Component, PropTypes } from 'react';

//Components
import JoinedUserCard from './JoinedUserCard';

export default class JoinedUsersList extends Component {

  static contextTypes = {
    router: PropTypes.object
  };


  render() {
    return (
      <ul className="collection">
          {
            this.props.data.map((user, index) => {
              return <JoinedUserCard
                      key={index}
                      user={user}
                      />;
            })
          }
      </ul>
    );
  }

}