import React from 'react';


class TechStack extends React.Component {
  
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
      paddingBottom : '40px',
      color: 'rgba(36, 63, 115, 0.91)'
    };
  }
  
  imageStyle() {
    return {
      borderRadius: '7px'
    };
  }
  
  render() {
    return (
      
      <div className='row' style={{backgroundColor: '#f2f2f2'}}>
        
        <div style={this.teamWrapStyle()}>
          
          <h2 className='center-align' style={this.teamHeaderStyle()}>
            Tech Stack
          </h2>
            
            <div className='row center-align'>
              
              <div className='row first-row-tech'>
              
                <div className='col s6 m4 l3' style={this.teamStyle()}>
                
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png' className='responsive-img' style={this.imageStyle()}/>
                
                </div>
                
                <div className='col s6 m4 l3' style={this.teamStyle()}>
                
                  <img src='https://www.wagonhq.com/images/posts/react.png' className='responsive-img' style={this.imageStyle()}/>
                
                </div>
                
                <div className='col s6 m4 l3' style={{...this.teamStyle(), paddingTop: '0'}}>
                
                  <h2>Redux</h2>
                
                </div>
                
                <div className='col s6 m4 l3' style={this.teamStyle()}>
                
                  <img src='https://d23f6h5jpj26xu.cloudfront.net/xcy4ixzf4fk9sa_small.png' className='responsive-img' style={{...this.imageStyle(), paddingTop: '25px'}}/>
                
                </div>
                
              </div>
              
              <div className='row second-row-tech'>
              
                <div className='col s6 m4 l3' style={this.teamStyle()}>
                
                  <img className='responsive-img' src='https://www.pubnub.com/blog/wp-content/uploads/2015/07/Babel-Javascript-compiler.png' style={{...this.imageStyle(), paddingTop: '25px'}}/>
                
                </div>
                
                <div className='col s6 m4 l3' style={this.teamStyle()}>
                
                  <img src='http://mean.io/system/assets/img/logos/express.png' className='responsive-img' style={{...this.imageStyle(), paddingTop: '25px'}}/>
                
                </div>
                
                <div className='col s6 m4 l3' style={this.teamStyle()}>
                
                  <img src='http://knexjs.org/docs/images/knex.png' className='responsive-img' style={{...this.imageStyle(), paddingTop: '25px'}}/>
                
                </div>
                
                <div className='col s6 m4 l3' style={this.teamStyle()}>
                
                  <img src='https://camo.githubusercontent.com/e6fd2b90adef0130a11a1d46ec29b7fd014c82fb/687474703a2f2f692e696d6775722e636f6d2f76506e39706e6e2e706e67' className='responsive-img' style={{...this.imageStyle(), paddingTop: '25px'}}/>
                
                </div>
              
              </div>
              
              <div className='row third-row-tech'>
              
                <div className='col s6 m4 l3' style={this.teamStyle()}>
                
                  <img className='responsive-img' src='https://wooster.checkmy.ws/assets/img/posts/css-frameworks-bootstrap-alternatives/materialize-css.png' style={{...this.imageStyle(), paddingTop: '25px'}}/>
                
                </div>
                
                <div className='col s6 m4 l3' style={this.teamStyle()}>
                
                  <img src='https://blog.sparkpost.com/wp-content/uploads/2015/06/HerokuLogo.png' className='responsive-img' style={{...this.imageStyle(), paddingTop: '25px'}}/>
                
                </div>
                
                <div className='col s6 m4 l3' style={this.teamStyle()}>
                
                  <img src='https://webpack.github.io/assets/logo.png' className='responsive-img' style={{...this.imageStyle(), paddingTop: '25px'}}/>
                
                </div>
                
                <div className='col s6 m4 l3' style={this.teamStyle()}>
                
                  <img src='https://onsen.io/blog/content/images/2015/Aug/chaijs-mocha.png' className='responsive-img' style={{...this.imageStyle(), paddingTop: '25px'}}/>
                
                </div>
              
              </div>
              
              <div className='row fifth-row-tech'>
              
                <div className='col s6 m4 l3' style={this.teamStyle()}>
                
                  <img src='https://s3-us-west-1.amazonaws.com/eventify-photos/material-ui-logo.svg' className='responsive-img' style={{...this.imageStyle(), paddingTop: '25px'}}/>
                
                </div>
                
              </div>
            
            </div>
            
          </div>
          
        </div>
              
    
    );
  }
}

export default TechStack;