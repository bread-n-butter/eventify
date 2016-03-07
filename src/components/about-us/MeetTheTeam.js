import React from 'react';

class MeetTheTeam extends React.Component {

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


  teamHeaderStyle() {
    return {
      paddingTop : '100px',
      paddingBottom : '40px',
      color: 'rgba(36, 63, 115, 0.91)'
    };
  }

  teamStyle() {
    return {
      padding: '25px'
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

      <div className='row'>

        <div className='meet-the-team' style={this.teamWrapStyle()}>

          <h2 className='center-align' style={this.teamHeaderStyle()}>

            Meet the Team

          </h2>

          <div className='row center-align'>

            <div className='col s12 l3' style={this.teamStyle()}>

              <img src='https://avatars3.githubusercontent.com/u/13400593?v=3&s=460' className='responsive-img' style={this.imageStyle()}/>

              <h2 style={this.nameStyle()}> Vincent Jo </h2>

              <h5 style={this.subNameStyle()}> Front End Engineer </h5>

            </div>

            <div className='col s12 l3' style={this.teamStyle()}>

              <img src='https://avatars3.githubusercontent.com/u/9803285?v=3&s=460' className='responsive-img' style={this.imageStyle()}/>

              <h2 style={this.nameStyle()}> Delphine Foo </h2>

              <h5 style={this.subNameStyle()}> Full Stack Engineer | Product Owner </h5>

            </div>

            <div className='col s12 l3' style={this.teamStyle()}>

              <img src='https://avatars3.githubusercontent.com/u/13316418?v=3&s=460' className='responsive-img' style={this.imageStyle()}/>

              <h2 style={this.nameStyle()}> Kristen Haydel </h2>

              <h5 style={this.subNameStyle()}> Full Stack Engineer | Scrum Master </h5>

            </div>

            <div className='col s12 l3' style={this.teamStyle()}>

              <img src='https://avatars0.githubusercontent.com/u/10159831?v=3&s=460' className='responsive-img' style={this.imageStyle()}/>

              <h2 style={this.nameStyle()}> Oleg Umarov </h2>

              <h5 style={this.subNameStyle()}> Full Stack Engineer </h5>

            </div>

          </div>

        </div>

      </div>

    );
  }
}

export default MeetTheTeam;
