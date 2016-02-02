import React, { Component } from 'react';

import CircularProgress from 'material-ui/lib/circular-progress';

export default class Spinner extends Component {

  render() {
    return (
      <div>
        <div className='center-align'>
          <CircularProgress size={ 2 } />
        </div>
      </div>
    );
  }
}
