import React, { Component } from 'react';
import style from './ReadSingleSnu.css'

export default class ReadSingleSnu extends Component {

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
    console.log(this.props);
    return (
      <div className={style.App}>
        <h3>Blablabla</h3>
        <ul>{ this.renderSnus() }</ul>
      </div>
    );
  }
}
