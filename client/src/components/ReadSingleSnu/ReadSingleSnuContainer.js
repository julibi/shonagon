import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSnus, fetchSnu, setToRead, createSnu, getSnusMatchingKeyword, getUnreadSnus } from '../../actions/index';
import { randomSnu } from '../../selectors/index';
import ReadSingleSnu from './ReadSingleSnu';

class ReadSingleSnuContainer extends Component {

  componentWillMount() {
    this.props.getUnreadSnus();
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
    unreadSnus: state.unreadSnus,
    randomSnu: randomSnu(state),
    keywordMatchingSnus: state.keywordMatchingSnus,
    currentSnu: state.currentSnu.snu
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSnus: () => dispatch(fetchSnus()),
    fetchSnu: (id) => dispatch(fetchSnu(id)),
    getSnusMatchingKeyword: (keyword) => dispatch(getSnusMatchingKeyword(keyword)),
    setToRead: (id) => dispatch(setToRead(id)),
    createSnu: (object) => dispatch(fetchSnu(object)),
    getUnreadSnus: () => dispatch(getUnreadSnus())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadSingleSnuContainer);
