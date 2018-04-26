/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {pink400, blueGrey900} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from './AppBar/AppBar';
import Ex_Batch from './db/cv/bc';


const styles = {
  main: {
    paddingTop: 0,
    margin:0,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey900,
    accent1Color: pink400,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

 

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      
        <div style={styles.main}>
         

          
        <Appbar />
      
          

        {this.props.children}  
            
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;