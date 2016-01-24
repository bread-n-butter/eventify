/**
 *    Template for landing page as of now,
 *    which will contain the NAV bar
 *
 *    Might extend to templating for the Dashboard.
 *
 */
import React from 'react';

//components
import NavBar from './navBar/navBar';
import Banner from './landing-page/Banner';
import EventList from './landing-page/FeatEvents';
import SearchBar from './landing-page/SearchBar'

//helper for HTTP requests
import helper from '../helpers/helpers.js'

class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      events : [{title: "Event1", desc: "cool", img: "http://lorempixel.com/640/480/nightlife"}, 
                {title: "Event2", desc: "awesome", img: "http://lorempixel.com/640/480/nightlife" }, 
                {title: "Event3", desc: "nice", img: "http://lorempixel.com/640/480/nightlife" },
                {title: "Event4", desc: "nice", img: "http://lorempixel.com/640/480/nightlife" },
                {title: "Event5", desc: "nice", img: "http://lorempixel.com/640/480/nightlife" },
                {title: "Event6", desc: "nice", img: "http://lorempixel.com/640/480/nightlife" }]
    }
  }
  
  /**
   *    Run init when components mount
   */
  componentDidMount() {
    this.init();
  }
  
  /**
   *    Get data from backend about events
   */
  init() {
    console.log("Inside of Init");
    const that = this;
    helper.getEvents()
      .then( (data) => {
        that.setState({
          events: data.data
        });
      });
  }
  
  render() {
    return (
      <div>
        <NavBar />
        <SearchBar />
        <div className="row">
          <Banner /> 
        </div>
        <div className="container">
          <EventList events={this.state.events} />
        </div>
      </div>
    )
  }

}

export default Main;
