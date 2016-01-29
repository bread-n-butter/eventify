import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';

import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from 'material-ui/lib/icon-button';
import StarBorder from '../../../node_modules/material-ui/lib/svg-icons/toggle/star-border.js';
import CircularProgress from 'material-ui/lib/circular-progress';

<<<<<<< HEAD
import NavBar from '../navBar/navBar.js'
import {fetchEvents, auth} from '../../actions/';
=======
import NavBar from '../navBar/navBar.js';
import {fetchEvents} from '../../actions/';
>>>>>>> progess
import Helper from '../../helpers/helpers';

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
    marginTop: 24
  }
};

class Dashboard extends Component {

  componentWillMount() {
    console.log('authCheck in dashboard:', this.props.auth());
    this.props.fetchEvents();
    // console.log(this.props.events.data);
  }
  renderEvents() {
    return this.props.events.data.data.map((event) => {
      // console.log(event);
      return (
        <GridTile
          key={event.event_id}
          title={event.description}
          subtitle={<span>by <b>{event.creator}</b></span>}
          actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
          className="hoverable"
        >
          <img src='http://lorempixel.com/400/400/nightlife' />
        </GridTile>
      );
    });
  }

  render() {
    const events = this.props.events.data;
    if (!events) {
      return (
        <div>
          <div className='center-align'>
            <CircularProgress size={2} />
          </div>
        </div>
      );
    }
    return (
      <div style={styles.root}>
        <NavBar />
        <GridList
          cellHeight={400}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchEvents, auth}, dispatch);
}

function mapStateToProps(state) {
  return {events: state.events.all};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

