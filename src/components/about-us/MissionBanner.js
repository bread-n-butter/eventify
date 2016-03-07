import React from 'react';


class MissionBanner extends React.Component {

  heroStyle() {
    return {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      backgroundColor: 'rgba(36, 63, 115, 0.91)'
    };
  }

  heroMsgStyle() {
    return {
      width : '95%',
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: '15px',
      paddingRight: '15px',
      textAlign: 'center',
      color: 'white'
    };
  }

  render() {
    return (

      <div className='row'>

        <div className='about-us-wrapper'>

          <div className='hero-aboutus' style={this.heroStyle()}>

            <div className='hero-message'style={this.heroMsgStyle()}>

              <div>

                <h1 className='hero-header' >We're on a mission to kick loneliness in the ass!</h1>

                <h5 style={{fontWeight: '200'}}>
                  We believe that having fun is a huge part of life, and being lonely sucks.
                  So join up, and create and join some events!
                </h5>

              </div>

            </div>

          </div>

        </div>

      </div>

    );
  }
}

export default MissionBanner;
