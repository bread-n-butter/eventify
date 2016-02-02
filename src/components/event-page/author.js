import React, { Component } from 'react';

import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

export default class Author extends Component {

  render() {
    return (
      <div className="">
        <ListItem
          disabled={true}
          leftAvatar={<Avatar src="http://lorempixel.com/50/50/nightlife" />}
        >
         by Mr McLovin
        </ListItem>
      </div>
    );
  }
}
