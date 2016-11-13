import React from 'react';
import ReactDOM from 'react-dom';
import './css/entrance.css';

class Window extends React.Component {

  render() {

    return (
      <div>
        <div className="topBar"></div>
        <div className="middle"></div>
        <SendButton />
      </div>
    );
  }
}

class SendButton extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        text: ''
      };
  }

  handleClick(e) {
    this.setState({
      text: 'mosl'
    });

  }

  render() {

    return (
      <div className="bottomBar">
        <input value={this.state.text}/>
        <button onClick={this.handleClick}>Send</button>
      </div>
    );
  }
}


class TopBar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        items: ['item1','item2']
      }
  }

  render() {

    return (
      <div>Good Boy</div>
    );
  }
}

class Item extends Component {

  render() {

    return (
      <div>
        <h1>Hello  , </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Window />,
  document.getElementById('container')
);
