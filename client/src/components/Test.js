import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSnus } from '../actions/index';
import style from './Test.css';

class Test extends Component {
  componentWillMount() {
    this.props.fetchSnus();
  }

  renderSnus() {
    const { snus } = this.props;
    if(snus && snus.length > 0) {
      return this.props.snus.map((snu) => 
        <li key={snu._id}>{ snu.title }</li>
      )
    }

    return <div>Loading ...</div>
  }

  render() {
    console.log(this.props.snus);
    return (
      <div className={style.App}>
        <h3>Blablabla</h3>
        <ul>{ this.renderSnus() }</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    snus: state.snus
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchSnus: () => dispatch(fetchSnus())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
