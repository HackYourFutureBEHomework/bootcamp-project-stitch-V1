import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';


class ConnectionRequestItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
       <img src="./images/simplephoto.jpeg" width="50px" height="40px" alt="photoofconnect" />
       <h2>Connection request from name</h2>
       <h3>web developer</h3>
       <Button>accept</Button>
       <Button>decline</Button>
      </div>
    );
};
};
export default ConnectionRequestItem;