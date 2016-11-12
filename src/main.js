import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Item extends Component {

  render() {

    return (
      <div>
        <h1>Hello Boy</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Item />,
  document.getElementById('ex')
);
