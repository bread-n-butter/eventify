import React, { Component } from 'react';

import Avatar from 'material-ui/lib/avatar';
import ListItem from 'material-ui/lib/lists/list-item';

export default class Author extends Component {

  render() {
    return (
      <div className="flow-text">
        <ListItem
          disabled={ true }
          leftAvatar={ <Avatar src="http://lorempixel.com/50/50/nightlife" /> }
        >
         by { this.props.data.creator_first_name }  { this.props.data.creator_last_name }
        </ListItem>
      </div>
    );
  }
}
