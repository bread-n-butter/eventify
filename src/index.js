import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/hello';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstState: 'Hello world'
    }
  }

  render() {
    return React.createElement(
      "div",
      null,
      "Hello world"
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.body);
