/**
 *    Template for landing page as of now,
 *    which will contain the NAV bar
 *
 *    Might extend to templating for the Dashboard.
 *
 */
import React from 'react';
import NavBar from './navBar/navBar';

import Banner from './landing-page/Banner';
import EventList from './landing-page/FeatEvents';

class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      events : [{title: "Event1", desc: "cool", img: "http://lorempixel.com/640/480/abstract"}, 
                {title: "Event2", desc: "awesome", img: "http://lorempixel.com/640/480/abstract" }, 
                {title: "Event3", desc: "nice", img: "http://lorempixel.com/640/480/abstract" },
                {title: "Event4", desc: "nice", img: "http://lorempixel.com/640/480/abstract" },
                {title: "Event5", desc: "nice", img: "http://lorempixel.com/640/480/abstract" },
                {title: "Event6", desc: "nice", img: "http://lorempixel.com/640/480/abstract" }]
    }
  }
  
  render() {
    return (
        //TODO: Delphine's Navbar here.
      <div>
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
