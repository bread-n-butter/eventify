/**
 *    Template for landing page as of now,
 *    which will contain the NAV bar, Featured Events, and Banner
 *
 *
 */
import React from 'react';

//Import Components
import NavBar from '../navBar/navBar';
import Banner from './Banner';
import EventList from './FeatEvents';
import SearchBar from './SearchBar';

//Helpers for HTTP requests
import Helpers from '../../helpers/helpers.js';

class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events : [{title: 'Event1', desc: 'cool', img: 'http://lorempixel.com/640/480/nightlife'},
                {title: 'Event2', desc: 'awesome', img: 'http://lorempixel.com/640/480/nightlife' },
                {title: 'Event3', desc: 'nice', img: 'http://lorempixel.com/640/480/nightlife' },
                {title: 'Event4', desc: 'nice', img: 'http://lorempixel.com/640/480/nightlife'},
                {title: 'Event5', desc: 'nice', img: 'http://lorempixel.com/640/480/nightlife' },
                {title: 'Event6', desc: 'nice', img: 'http://lorempixel.com/640/480/nightlife' }],
      filteredEvents: [],
      isLoggedIn: false
    };
  }

  /**
   *    Run init when components mount
   */
  componentDidMount() {
    Helpers.requireAuth().then((isLoggedIn) => {
      this.setState({ isLoggedIn: isLoggedIn });
    });
    this.init();
  }

  /**
   *    Get data from backend about events
   */
  init() {
    const that = this;
    Helpers.getEvents()
      .then( (data) => {
        that.setState({
          events: data.data,
          filteredEvents: data.data
        });
      });
  }
  
  /**
   *    
   *    Sets the 'filteredEvents' state of this Component,
   *    based on search box input and then re-renders the this page.
   *    
   *    Currently only searches the title only.
   *    
   */
  filterList(e) {
    let updatedList = this.state.events;
    updatedList = updatedList.filter(function(event){
      return event.event_name.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    });
    this.setState({filteredEvents: updatedList});
    this.render();
  }

  render() {
    return (
      <div>
        <NavBar renderMain={() => this.init()}/>
        <SearchBar />
        <input type="text" placeholder='search' onChange={(e) => this.filterList(e)} />
        <div className="row">
          <Banner />
        </div>
        {this.props.children}
        <div className="container">
          <EventList events={this.state.filteredEvents} />
        </div>
      </div>
    );
  }

}

export default Landing;
