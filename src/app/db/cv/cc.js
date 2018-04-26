import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import MobileTearSheet from './MTS';
import {List, ListItem} from 'material-ui/List';


import {
  blue300,
    lime200,
} from 'material-ui/styles/colors';

const styles = {
  main: {
    paddingTop: 0,
    margin:0,
  },
  cardtext: {
         height: '500px',
         padding:0,
  },
  cardtitle: {
    fontSize: 21,
    fontWeight: "normal",
    opacity: 0.7,
  },

};


const ComponentCard = () => (
  <Card style = {styles.card}  containerStyle={{paddingBottom:0,height:"inherit"}}>
    <CardHeader
      title="Notification"
      avatar={<Avatar
                  icon={<i className="fa fa-bell-o" aria-hidden="true"></i>}
                  color={blue300}
                  backgroundColor={lime200}
                  size={42}
                  />}
      subtitle="Last Update- 3min ago"
    />
      <CardText style = {styles.cardtext}>
      <MobileTearSheet>
    <List style={{padding:0}}>
  
<ListItem primaryText="No update from faculty. So chill :)" />
      <Divider />
   
<ListItem primaryText="No update from faculty. So chill :)" />
    <Divider />
<ListItem primaryText="Check your inbox." />
    <Divider />
<ListItem primaryText="No update from faculty. So chill :)" />
    <Divider />
<ListItem primaryText="Assignment uploaded. Check unit 2 of Coding." />
    <Divider />
<ListItem primaryText="No update from faculty. So chill :)" />
    <Divider />
<ListItem primaryText="No update from faculty. So chill :)" />
    <Divider />
<ListItem primaryText="No update from faculty. So chill :)" />
    <Divider />
<ListItem primaryText="No update from faculty. So chill :)" />
    <Divider />
    

    </List>
    
    </MobileTearSheet>
    </CardText>
   
  </Card>
);

export default ComponentCard;