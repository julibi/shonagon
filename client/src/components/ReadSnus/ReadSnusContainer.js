import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSnus } from '../../actions/index';
import { readSnus } from '../../selectors/index';
import ReadSnus from './ReadSnus';

class ReadSingleSnuContainer extends Component {

  componentWillMount() {
    this.props.fetchSnus();
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
    unreadSnus: readSnus(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSnus: () => dispatch(fetchSnus())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadSingleSnuContainer);
