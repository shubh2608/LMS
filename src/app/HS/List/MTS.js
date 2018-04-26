import React, {Component} from 'react';
import PropTypes from 'prop-types';



class MobileTearSheet extends Component {

  static propTypes = {
    children: PropTypes.node,
    height: PropTypes.number.isRequired,
  };

  static defaultProps = {
    height: '100%',
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {
      prepareStyles,
    } = this.context.muiTheme;

    const styles = {
      root: {

        //overflowY:'scroll',
      //  overflowX:'hidden',
           height:"100%",
      },
      container: {
        borderTop: 'solid 1px #d9d9d9',
        height: this.props.height,
      //    heigth: 180,
        overflowY: 'hidden',
          
      },
      bottomTear: {
        display: 'block',
        position: 'relative',
        marginTop: 5,
        maxWidth: 98,
      },
    };

    return (
      <div style={prepareStyles(styles.root)}>
        <div style={prepareStyles(styles.container)}>
          {this.props.children}
        </div>
       
      </div>
    );
  }
}

export default MobileTearSheet;