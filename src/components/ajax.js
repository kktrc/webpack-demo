import React from 'react';
import $ from 'jquery';
import axios from 'axios';

class AjaxDemo extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        text: ''
      };
  }

  handleClick() {

    axios.get('https://api.github.com/users/pzzls').then(function(response){
      this.setState({
        text:JSON.stringify(response)
      });
    }.bind(this)).catch(function(response){

    });

    alert('HaHa --');
  }

  render() {

    return (

      <div>
        <textarea value={this.state.text}></textarea>
        <button onClick={this.handleClick.bind(this)}>ajax send</button>
      </div>
    );
  }
}

module.exports = AjaxDemo;
