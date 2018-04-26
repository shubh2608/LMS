import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  hardcode: {
    height:'400px'
  },
  slide: {
    padding: 10,
  },
  tabs: {
    boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.12)',
    background: '#263238',
  },
};

export default class DrawerD extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <Drawer open={this.state.open} containerStyle={{top:'64px'}}

        >
          <MenuItem>Subject 1</MenuItem>
          <MenuItem>Subject 2</MenuItem>
          <MenuItem>Subject 3</MenuItem>
          <MenuItem>Subject 4</MenuItem>
          <MenuItem>Subject 5</MenuItem>
          <MenuItem>Subject 6</MenuItem>
          <MenuItem>Subject 7</MenuItem>
          <MenuItem>Subject 8</MenuItem>
          <MenuItem>Subject 9</MenuItem>
          <MenuItem>Subject 10</MenuItem>
          <MenuItem>Subject 11</MenuItem>
        </Drawer>
      </div>
    );
  }
}

