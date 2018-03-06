import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSnus } from '../actions/index';
import style from './Test.css';

class Test extends Component {
  componentDidMount() {
    this.props.fetchSnus();
  }

  render() {
    console.log('this.props:',this.props);
    console.log('this.state:',this.state);
    return (
      <div className={style.App}>
        <h3>Blablabla</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    snus: state.snus
  };
}

export default connect(mapStateToProps, { fetchSnus })(Test);
