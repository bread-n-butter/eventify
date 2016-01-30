import React, { Component, PropTypes } from 'react';

import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from 'material-ui/lib/icon-button';
import StarBorder from '../../../node_modules/material-ui/lib/svg-icons/toggle/star-border.js';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'

  },
  gridList: {
    'maxWidth': 1200,
    'maxHeight': 2800,
    overflowY: 'auto',
    marginBottom: 24,
    marginTop: 24,
    marginLeft: 24
  }
};

export default class Featured extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  selectEvent(event) {
    this.props.select(event);
    this.context.router.push('/event');
  }

  renderEvents() {
    // console.log(this.props.data, 'data');
    return this.props.data.map((event) => {
      return (
        <GridTile
          key={event.event_id}
          onClick={this.selectEvent.bind(this, event)}
          title={event.description}
          subtitle={<span>by <b>{event.creator}</b></span>}
          actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
          className="hoverable"
        >
          <img src='http://lorempixel.com/300/300/nightlife' />
        </GridTile>
      );
    });
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={300}
          cols={3}
          padding={25}
          style={styles.gridList}
        >
          {this.renderEvents()}
        </GridList>
      </div>
    );
  }
}

