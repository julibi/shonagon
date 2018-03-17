import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReadSnus } from '../../actions/index';
import ReadSnus from './ReadSnus';

class ReadSingleSnuContainer extends Component {

  componentWillMount() {
    this.props.getReadSnus();
  }

  render() {
    return (
      <ReadSnus { ...this.props } />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    snus: state.snus,
    readSnus: state.readSnus
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getReadSnus: () => dispatch(getReadSnus())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadSingleSnuContainer);
