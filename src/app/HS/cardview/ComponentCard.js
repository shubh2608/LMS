import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
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
  red800,
} from 'material-ui/styles/colors';

const ComponentCard = () => (
  <Card>
    <CardHeader
      title="Component 1"
      avatar={<Avatar
                  icon={<i className="fa fa-exclamation-triangle exclamation" aria-hidden="true"></i>}
                  color={red800}
                  backgroundColor="white"
                
                  />}
      subtitle="2 min ago"
      actAsExpander={true}
      showExpandableButton={true}
    />
      <CardText expandable={true}>
     
    </CardText>
  </Card>
);

export default ComponentCard;