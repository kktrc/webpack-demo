import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link,Route,RouteHandler} from 'react-router';
import axios from 'axios';

export default class PagePannel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageList:[]
    };
  }

  componentDidMount() {

  }

  render() {

    return (
      <div>
        <h1>Hello HI</h1>
      </div>
    );
  }
}

class PageItem extends React.Component {
  
}
