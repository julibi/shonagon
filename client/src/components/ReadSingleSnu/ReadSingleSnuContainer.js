import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSnus, fetchSnu, setToRead, createSnu } from '../../actions/index';
import { unreadSnus, randomFirstSnu } from '../../selectors/index';
import ReadSingleSnu from './ReadSingleSnu';

class ReadSingleSnuContainer extends Component {
  componentWillMount() {
    this.props.fetchSnus();
  }

  render() {
    console.log('ReadSingleSnuContainer, this.state: ', this.state);
    return (
      <ReadSingleSnu { ...this.props } />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    snus: state.snus,
    unreadSnus: unreadSnus(state),
    randomFirstSnu: randomFirstSnu(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSnus: () => dispatch(fetchSnus()),
    fetchSnu: fetchSnu,
    setToRead: setToRead,
    createSnu: createSnu
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadSingleSnuContainer);
