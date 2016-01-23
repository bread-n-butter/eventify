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
import featuredEvents from './landing-page/featuredEvents'


const Main = ({history, children}) => {
  return (
    //TODO: Delphine's Navbar here.
    <div className="main-container">
    <div>
      <Navbar />
      <Banner /> 
      <featuredEvents />
    </div>
  )
}

export default Main;
