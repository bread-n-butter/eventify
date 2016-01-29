import React, { Component } from 'react';

import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from 'material-ui/lib/icon-button';
import StarBorder from '../../../node_modules/material-ui/lib/svg-icons/toggle/star-border.js';

// import {fetchEvents, auth} from '../../actions/';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'

  },
  gridList: {
    'maxWidth': 1200,
    'maxHeight': 800,
    overflowY: 'auto',
    marginBottom: 24,
    marginTop: 24,
    marginLeft: 24
  }
};

export default class Featured extends Component {

  // componentWillMount() {
  //   // console.log('authCheck in dashboard:', this.props.auth());
  //   // this.props.fetchEvents();
  //   // console.log(this.props.events.data);
  // }

  renderEvents() {
    return this.props.data.map((event) => {
      return (
        <GridTile
          key={event.event_id}
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
    console.log('line 56', this.props);
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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchEvents, auth}, dispatch);
// }
//
// function mapStateToProps(state) {
//   return {events: state.events.all};
// }
//
// // export default connect(mapStateToProps, mapDispatchToProps)(Featured);
//
