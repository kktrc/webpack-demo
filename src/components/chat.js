import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';

class ChatSend extends Component {

  handleClick() {

  }
  render() {

    return (
      <div className="chat-send">
        <textarea className="text"></textarea>
        <button className="send">send</button>
      </div>
    );
  }
}

module.exports = ChatSend;
