var React = require('react');
var ReactDOM = require('react-dom');

var componentsNode = document.getElementById('components');
var dom = document.createElement('div');
componentsNode.appendChild(dom);

var UI = require('../common/webim-deom');
var Button = UI.Button;
var Input = UI.Input;

var AddMember = React.createClass({

  add: function () {

    var value = this.refs.input.refs.input.value;

    if(!value) {
      Demo.api.NotifyError(Demo.lan.username + Demo.lan.notEmpty);
      return;
    }

    if(value == Demo.user) {
      Demo.api.NotifyError(Demo.lan.addFriendSelfInvalid);
      this.close();
      return;
    }

    if(Demo.roster[value] == 1) {
      Demo.api.NotifyError(value + '' + Demo.lan.addFriendRepeat);
      this.close();
      return;
    }

    if(WebIM.config.isWindowSDK) {
      WebIM.doQuery('{"type":"addFriend","to":}')
    }
  }
})
