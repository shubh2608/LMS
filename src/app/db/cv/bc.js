import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import LinearProgressExampleDeterminate from './Progress';
import Avatar from 'material-ui/Avatar';
import {
  blue300,
    lime200,
} from 'material-ui/styles/colors';
const styles = {
  cardMain:{
    paddingTop: 0, 
    paddingBottom:0,
    marginTop:20
  },
     main: {
    paddingTop: 0, 
    paddingBottom:8,
},
h2: {
        position:'absolute',
        right:'20px',
        top:'9px',
    },
  cardText: {
    marginTop:0,
    paddingTop:0,
      
  },
  card: {
    marginTop:2,
    boxShadow:"none",
  },
};

export default class Ex_Batch extends Component {
render() {
     return (
  
<Card style={styles.cardMain} containerStyle={{paddingBottom:0}}>
    <CardHeader
      title="BC"
      titleStyle = {styles.cardtitle}
      avatar={<Avatar
                  icon={<i className="fa fa-bell-o" aria-hidden="true"></i>}
                  color={blue300}
                  backgroundColor={lime200}
                  size={42}
                  />}
      subtitle="Last Update- 3min ago"
          
    />
         
    <CardText style = {styles.cardText}>
      <Card style = {styles.card} containerStyle={{paddingBottom:0}}>
         <a href="HS" class="" title="Theory">
    <CardHeader
            title="Theory"
    children={<h5 style={styles.h2}>0/10 Units</h5>}
            className="cardsubtitle"
          /></a>
    
    <CardText style={styles.main}>
      <LinearProgressExampleDeterminate color="#E0E0E0"  />
          </CardText>
    
      </Card> 
    
  <Card style = {styles.card} containerStyle={{paddingBottom:0}}>
         <a href="HS" class="" title="Coding">
  <CardHeader
            title="Coding"
         className="cardsubtitle"
    children={<h5 style={styles.h2}>3/10 Units</h5>}
          /></a>
    <CardText style={styles.main}>
    <LinearProgressExampleDeterminate color="#00FF00" value="30" />
          </CardText>
  
      </Card>
    
    <Card style = {styles.card} containerStyle={{paddingBottom:0}}>
         <a href="HS" class="" title="Mathematics">
    <CardHeader
            title="Mathematics"
    children={<h5 style={styles.h2}>4/10 Units</h5>}
            className="cardsubtitle"
          /></a>
    <CardText style={styles.main}>
            <LinearProgressExampleDeterminate color="#FF0000" value="30" />
          </CardText>
      </Card>
        
    </CardText>

</Card>
     );
   }
 }
