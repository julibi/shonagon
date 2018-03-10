import React, { Component } from 'react';
import style from './ReadSingleSnu.css'

import Typist from 'react-typist';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ReadSingleSnu extends Component {

  renderRandomFirstSnu() {
    const { randomFirstSnu } = this.props;
    if(randomFirstSnu) {
      return (
        <div>
          <Typist cursor={ { show: false } }>{ randomFirstSnu.title }</Typist>
          <ReactCSSTransitionGroup
            transitionName="snu"
            transitionAppear={ true }
            transitionAppearTimeout={ 1000 }
            transitionEnter={ false }
            transitionLeave={ false }
          >
            <p>{ randomFirstSnu.text }</p>
            <button>Some other</button>
            <button onClick={ () => this.handleNext(randomFirstSnu) }>Done reading, next</button>
          </ReactCSSTransitionGroup>
        </div>
      );
    }
    return <div>Loading ...</div>
  }

  handleNext(snu) {
    const { createSnu, setToRead } = this.props;
    const id = snu._id; 
    console.log('snu', snu);
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

{/* <ul>{ randomFirstSnu.keywords.map((keyword, idx) => 
            <li key={ idx }>
              <button onClick={ () => this.handleNext(randomFirstSnu) }>
                { keyword }
              </button>
            </li>) }
          </ul> */}
