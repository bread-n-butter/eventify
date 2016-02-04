import React, { Component } from 'react';
import LinearProgress from 'material-ui/lib/linear-progress';


export default class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: 0
    };
  }

   componentDidMount() {
     const progress = this.props.data.num_of_people_joined / this.props.data.total_number_of_people_req * 100;
     this.setState({completed: progress});
   }

  render() {
    return (
      <LinearProgress mode="determinate" value={this.state.completed} color='hotPink' />
    );
  }
}
