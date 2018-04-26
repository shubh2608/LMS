import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import TouchRipple from 'material-ui/internal/TouchRipple';

import {
  blue300,
    lime200,
} from 'material-ui/styles/colors';

const customContentStyle = {
  width: '50%',
  maxWidth: 'none',
    height:'50%'
};
const styles ={
    main: {
    marginBottom:16,
  },
    card: {
    marginTop:0,
  
       marginRight:0,
        marginLeft:0,
  },
     cardtitle: {
    
    
  },
      cardText: {
    padding:12,
  },
     small: {
    width: 30,
    height: 30,
    padding: 2.6,
  },
     smallIcon: {
    width: 28,
    height:28,
  },
     radioButton: {
    marginTop: 16,
  },
    middleCol: {
    borderWidth: 1,
    borderColor:"#EEEEEE",
    borderRadius:5,
    },
    col:{
      paddingLeft:0,
      paddingRight:0
    }
};

export default class CircularProgressExampleDeterminate extends React.Component {

state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
      hover1:false,
      hover2:false,
      hover3:false,
    };
  }
  onMouseOver1 = () => this.setState({ hover1: true });
  onMouseOut1 = () => this.setState({ hover1: false });
  onMouseOver2 = () => this.setState({ shadow2: 1 });
  onMouseOut2 = () => this.setState({ shadow2: 0 });
  onMouseOver3 = () => this.setState({ shadow3: 1 });
  onMouseOut3 = () => this.setState({ shadow3: 0 });

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render() {
      
    const actions = [
     ,
      <FlatButton
        label="Close"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
       
    return ( 
<Card  >
         <CardHeader
          title="HS"
          subtitle="Last Updated: 2min ago"
          titleStyle = {styles.cardtitle}
         
    
                  
        />
        <CardText>
        <div className="row" style={{textAlign:"center"}}>
       
            <div className="col-xs-4" style={styles.col}> 
       
        <TouchRipple>
               <Card style = {styles.card}
               onMouseOver={this.onMouseOver1}
          onMouseOut={this.onMouseOut1} 
                  zDepth={0}>
                    <div className="first circle">
                      <strong></strong>
                      <span>Theory</span>
                    </div>
               </Card>
        </TouchRipple>
        </div>

        
        

        <div className="col-xs-4"  style={styles.col}>
        <TouchRipple>
            <Card style = {styles.card} 
            onMouseOver={this.onMouseOver2}
          onMouseOut={this.onMouseOut2} 
             zDepth={0}>
        <div className="second circle">
            <strong></strong>
            <span>Coding</span>
        </div>
      </Card>
        </TouchRipple>
    </div>
        
        
        <div className="col-xs-4" style={styles.col}>
        <TouchRipple>
          <Card style = {styles.card}
          onMouseOver={this.onMouseOver3}
          onMouseOut={this.onMouseOut3} 
           zDepth={0}>
        
        
            <div className="third circle"> 
                <strong></strong>
                <span>Mathematics</span>
            </div>
        </Card>
        </TouchRipple>
     </div>
</div>
        </CardText>
      </Card>
   
   
    );
  }} 
