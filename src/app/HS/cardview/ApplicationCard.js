import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  green500,
  purple500,
  grey300,
} from 'material-ui/styles/colors';

const styles = {
  main: {
    paddingTop: 0,
    margin:0,
  },
  card: {
    paddingBottom:0,
  },
  cardtitle: {
    fontSize: 21,
    fontWeight: "normal",
    opacity: 0.7,
  },
  cardText:{
    fontSize: 13,
    backgroundColor: "#E0E0E0",
    opacity: 0.7,
    padding:8,
  }


};
const style = {margin: 5};

export default class inc extends Component {
render() {
     return (
  <Card containerStyle={{paddingBottom:0}}>
    <CardHeader
          title="Subjects"
          subtitle="Component:15"
          avatar={<Avatar
                  icon={ <i className="fa fa-check noincident" aria-hidden="true"></i>}
                  color={'white'}
                  backgroundColor={green500}
                  size={36}
                  />} 
        />
      <Divider />
    <CardText style = {styles.cardText}>
      Last Updated : 1min ago
    </CardText>
  </Card>
     );
   }
 }