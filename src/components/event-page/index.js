import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import JoinedUsersList from './JoinedUsersList';

//fb share button
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

import { joinEvent, deleteEvent, fetchJoinedUsers, payForEvent, fetchOneEvent, unjoinEvent  } from '../../actions/';

import Details from './details';
import Buttons from './buttons';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardText from 'material-ui/lib/card/card-text';

const {  FacebookShareButton } = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');

const styles = {
  main: {
    marginTop: 20,
    paddingTop: 30
  },
  creator: {
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 15
  }

};

class Event extends Component {

  constructor(props) {
    super(props);
    this.props.fetchOneEvent(this.props.params.id);
    this.props.fetchJoinedUsers(this.props.params.id);
  }

  render() {

    const url = 'https://breadnbutter.herokuapp.com/#/event/' + this.props.params.id;
    const title = 'Eventify';
    const event = this.props.event;

    if (!this.props.event || !this.props.joinedUsers) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">

        <div className='row' style={ styles.main }>

          <div className='col m6 s12'>

            <Card>
              <CardMedia>
                <img src={event.image_url} />
              </CardMedia>
              <CardHeader
                title={event.event_name}
                subtitle={'@ ' + event.event_address_label}/>
              <CardText style={ styles.creator }> Created By { event.creator_first_name } { event.creator_last_name } </CardText>
            </Card>
            <h5 style={{paddingLeft: '0.60rem'}}>Event Members</h5>
            <JoinedUsersList data={this.props.joinedUsers} />
          </div>

          <div className='col m6 s12'>

            <Card>
              <CardText>
                <Details data={ this.props.event } />
                <div className="valign-wrapper">
                  <FacebookShareButton
                    url={url}
                    title={title}
                    style={{display: 'inline', margin: '0 0.5rem 0 2.5rem'}}>
                    <FacebookIcon
                      size={32}
                      round={true} />
                  </FacebookShareButton>
                  <span className="valign">Share this event on Facebook</span>
                </div>

              </CardText>
              <CardActions>

                { this.props.user.isLoggedIn ?
                <Buttons
                  joinEvent={ this.props.joinEvent }
                  data={ this.props.event }
                  user={ this.props.user }
                  joined={ this.props.joined }
                  delete={ this.props.deleteEvent }
                  unjoinEvent={ this.props.unjoinEvent }
                  pay={ this.props.payForEvent } />
                : <div className="center-align" style={{color: '#db436c'}}>Please Sign in above to Join this event!</div>}

              </CardActions>

            </Card>

          </div>

        </div>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ joinEvent, deleteEvent, fetchJoinedUsers, payForEvent, fetchOneEvent, unjoinEvent }, dispatch);
}

function mapStateToProps(state) {
  return {
    event: state.events.event,
    events: state.events.all,
    isLoggedIn: state.events.isLoggedIn,
    joined: state.events.joinedEvents,
    joinedUsers: state.events.joinedUsers,
    user: state.user,
    pay: payForEvent
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);
