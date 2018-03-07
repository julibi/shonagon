import React, { Component } from 'react';
import style from './ReadSingleSnu.css'

export default class ReadSingleSnu extends Component {

  renderRandomFirstSnu() {
    const { randomFirstSnu } = this.props;
    if(randomFirstSnu) {
      return (
        <div>
          <h3>{ randomFirstSnu.title }</h3>
          <p>{ randomFirstSnu.text }</p>
          <ul>{ randomFirstSnu.keywords.map((keyword, idx) => 
            <li key={ idx }>
              <button onClick={ () => this.handleNext(randomFirstSnu) }>
                { keyword }
              </button>
            </li>) }
          </ul>
        </div>
      );
    }
    return <div>Loading ...</div>
  }

  handleNext(snu) {
    const { createSnu, setToRead } = this.props;
    const id = snu._id; 
    if (setToRead) {
      setToRead(id, snu);
    }

    // then show all the keys
    
  }

  render() {
    console.log('ReadSingleSnu, this.props: ', this.props);
    return (
      <div className={style.App}>
        <div>{ this.renderRandomFirstSnu() }</div>
      </div>
    );
  }
}
