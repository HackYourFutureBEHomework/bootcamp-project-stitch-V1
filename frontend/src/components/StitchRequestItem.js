import React from 'react';
import 'antd/dist/antd.css';
import { Button, Card, Avatar } from 'antd';



  function StitchRequestItem({stitchNotification, decline, accept}) { 
    const { name, role, stitch, id } = stitchNotification;
    return (
      <Card style={{ width: 600, border:'none'}}>
        <div>
       <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
       <h2 className="notification-type" style={{textTransform:'capitalize', margin: '10px 0px'}}>Stitch request from {name}</h2>
       <h3 className="notification-role" style={{textTransform:'capitalize', margin: '10px 0px'}}>{role}</h3>
       <h3 className="notification-stitch" style={{margin: '10px 0px'}}>{stitch}</h3>
       <Button style={{margin:'0px 5px'}} onClick={() => accept(id)}>accept</Button>
       <Button onClick={() => decline(id)}>decline</Button>
      </div>
      </Card>
    );
};

export default StitchRequestItem;