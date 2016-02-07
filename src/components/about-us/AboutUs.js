import React from 'react';


class AboutUs extends React.Component {
  
  heroStyle() {
    return {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      padding: '200px',
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
  
  teamWrapStyle() {
    return {
      width : '90%',
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: '15px',
      paddingRight: '15px',
      textAlign: 'center'
    };
  }
  
  teamStyle() {
    return {
      padding: '25px'
    };
  }
  
  teamHeaderStyle() {
    return {
      paddingTop : '100px',
      paddingBottom : '40px'
    };
  }
  
  imageStyle() {
    return {
      borderRadius: '7px'
    };
  }
  
  nameStyle() {
    return {
      fontSize: '3rem',
      fontWeight: '300',
      fontStyle: 'Thin',
      paddingBottom: '0',
      marginBottom: '0',
      marginTop: '5px',
      color: '#454545'
    };
  }
  
  subNameStyle() {
    return {
      marginTop: '10px',
      fontSize: '1rem',
      fontWeight: '500',
      color: '#454545'
    };
  }
  
  
  render() {
    return (
      
      <div>
      
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
      
      
      <div className='row'>
      
        <div className='meet-the-team' style={this.teamWrapStyle()}>
          
          <h2 className='center-align' style={this.teamHeaderStyle()}>
            
            Meet the Team
            
          </h2>
          
          <div className='row center-align'>
            
            <div className='col s3' style={this.teamStyle()}>
            
              <img src='https://avatars3.githubusercontent.com/u/13400593?v=3&s=460' className='responsive-img' style={this.imageStyle()}/>
              
              <h2 style={this.nameStyle()}> Vincent Jo </h2>
              
              <h5 style={this.subNameStyle()}> Front End JavaScript Yoda </h5>
            
            </div>
            
          </div>
        
        </div>
      
      </div>
      
      
      <div className='row' style={{backgroundColor: '#f2f2f2'}}>
        
        <div style={this.teamWrapStyle()}>
          
          <h2 className='center-align' style={this.teamHeaderStyle()}>
            
            Tech Stack
            
          </h2>
            
            <div className='row center-align'>
              
              <div className='col s3' style={this.teamStyle()}>
              
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png' className='responsive-img' style={this.imageStyle()}/>
              
              </div>
              
              <div className='col s3' style={this.teamStyle()}>
              
                <img src='https://www.wagonhq.com/images/posts/react.png' className='responsive-img' style={this.imageStyle()}/>
              
              </div>
              
              <div className='col s3' style={{...this.teamStyle(), paddingTop: '0'}}>
              
                <h2>Redux</h2>
              
              </div>
              
              <div className='col s3' style={this.teamStyle()}>
              
                <img src='https://d23f6h5jpj26xu.cloudfront.net/xcy4ixzf4fk9sa_small.png' className='responsive-img' style={{...this.imageStyle(), paddingTop: '25px'}}/>
              
              </div>
              
              
              
              
            </div>
            
            
            
           
        
        </div>
        
      </div>
      
      
      
    </div>
    
    
    );
  }
}

export default AboutUs;