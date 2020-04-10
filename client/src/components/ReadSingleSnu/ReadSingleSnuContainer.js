// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchSnus, fetchSnu, setToRead, getSnusMatchingKeyword, getRandomSnu } from '../../actions/index';
// import ReadSingleSnu from './ReadSingleSnu';

// class ReadSingleSnuContainer extends Component {

//   componentWillMount() {
//     this.props.getRandomSnu();
//   }

//   render() {
//     return (
//       <ReadSingleSnu { ...this.props } />
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     snus: state.snus,
//     randomSnu: state.randomSnu,
//     keywordMatchingSnus: state.keywordMatchingSnus,
//     currentSnu: state.currentSnu.snu
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchSnus: () => dispatch(fetchSnus()),
//     fetchSnu: (id) => dispatch(fetchSnu(id)),
//     getSnusMatchingKeyword: (keyword) => dispatch(getSnusMatchingKeyword(keyword)),
//     setToRead: (id, snu) => dispatch(setToRead(id, snu)),
//     getRandomSnu: () => dispatch(getRandomSnu())
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ReadSingleSnuContainer);
