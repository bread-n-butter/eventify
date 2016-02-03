import React, { Component } from 'react';

const styles = {
  'fontFamily': 'GillSans, Calibri, Trebuchet, sans-serif'
};

export default class Details extends Component {
  render() {
    console.log(this);
    return (
     <div className="" style={styles}>
     <section>
       <p className="flow-text">{ this.props.data.description } </p>
     </section>

     <section>
       days to go
     </section>
     </div>
    );
  }
}
