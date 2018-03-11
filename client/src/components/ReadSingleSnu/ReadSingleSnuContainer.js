import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSnus, fetchSnu, setToRead, createSnu, getSnusMatchingKeyword } from '../../actions/index';
import { unreadSnus, randomFirstSnu } from '../../selectors/index';
import ReadSingleSnu from './ReadSingleSnu';

class ReadSingleSnuContainer extends Component {

  componentWillMount() {
    this.props.fetchSnus();
  }

  render() {
    return (
      <ReadSingleSnu { ...this.props } />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    snus: state.snus,
    randomFirstSnu: randomFirstSnu(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSnus: () => dispatch(fetchSnus()),
    getSnusMatchingKeyword,
    fetchSnu,
    setToRead,
    createSnu
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadSingleSnuContainer);
