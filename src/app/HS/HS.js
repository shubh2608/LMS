import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TouchRipple from 'material-ui/internal/TouchRipple'
import SwipeableViews from 'react-swipeable-views';
import ComponentCard from './cardview/ComponentCard';
import ListExampleNested from './List/componentList';
import DrawerD from '../Drawer/Drawer'
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  hardcode: {
    marginLeft:270,
  },
  slide: {
    padding: 10,
  },
  tabs: {
    boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.12)',
    background: '#263238',
  },
};

export default class HS extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>

        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          style = {styles.tabs}
          tabItemContainerStyle={{width: '600px',marginLeft:300}}
          inkBarStyle={{marginLeft:300}}
          >

          <Tab label="Theory" value={0} />
          <Tab label="Coding" value={1} />
          <Tab label="Mathematics" value={2} />
        </Tabs>
        <DrawerD/>
        <div className="row">
        <div className="col-lg-9">
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}>
            <div>

                  <div className="container" >
                  <div className="row">
                      <div className="col-lg-9" style={styles.hardcode}>
                         <ListExampleNested />
                      </div>
                  </div>
              </div>
              </div>

              <div className="container">
                <div className="row">
                      <div className="col-lg-9" style={styles.hardcode}>
                         <ListExampleNested />
                      </div>
                  </div>
              </div>

              <div className="container">
                <div className="row">
                      <div className="col-lg-9" style={styles.hardcode}>
                         <ListExampleNested />
                      </div>
                  </div>
              </div>
            </SwipeableViews>
          </div>

          </div>
          </div>
      
    );
  }
}


