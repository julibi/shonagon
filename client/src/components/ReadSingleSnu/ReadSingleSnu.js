import React, { Component } from 'react';
import style from './ReadSingleSnu.css'

import Typist from 'react-typist';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ReadSingleSnu extends Component {
  constructor(props) {
    super(props);
    this.state = { showKeywords: false };
  }
  renderRandomFirstSnu() {
    const { randomFirstSnu } = this.props;
    const { showKeywords } = this.state;
    if(randomFirstSnu) {
      return (
        <div>
          <h3><Typist cursor={ { show: false } }>{ randomFirstSnu.title }</Typist></h3>
          <ReactCSSTransitionGroup
            transitionName="snu"
            transitionAppear={ true }
            transitionAppearTimeout={ 1000 }
            transitionEnter={ false }
            transitionLeave={ false }
          >
            <p>{ randomFirstSnu.text }</p>
          </ReactCSSTransitionGroup>
          { !showKeywords ? (
            <div>
              <button>Some other</button>
              <button onClick={ () => this.handleNext(randomFirstSnu) }>Done reading, next</button>
            </div>
          ) : (
            <ul>{ randomFirstSnu.keywords.map((keyword, idx) => 
              <li key={ idx }>
                <button onClick={ () => this.handleNext(randomFirstSnu) }>
                  { keyword }
                </button>
              </li>) }
            </ul> 
          )
          }
        </div>
      );
    }
    return <div>Loading ...</div>
  }

  handleNext(snu) {
    const { setToRead } = this.props;
    const id = snu._id; 
    
    if (setToRead) {
      // setToRead(id, snu);
      this.setState({ showKeywords: true });
    }

    // then show all the keys
      //an action that toggles showKeywords to true or false
    
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
