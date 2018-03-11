import React, { Component } from 'react';
import style from './ReadSingleSnu.css'

import Typist from 'react-typist';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ReadSingleSnu extends Component {
  constructor(props) {
    super(props);
    this.state = { showTitles: false };
  }
  renderRandomFirstSnu() {
    const { randomFirstSnu } = this.props;
    const { showTitles } = this.state;
    // preselect a keyword
    // dispatch the action that searches for other keywords (action I)

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
          { !showTitles ? (
            <div>
              <button>Some other</button>
              <button onClick={ () => this.handleDoneReading(randomFirstSnu) }>Done reading, next</button>
            </div>
          ) : (
            <ReactCSSTransitionGroup
              transitionName="keywords"
              transitionAppear={ true }
              transitionAppearTimeout={ 1000 }
              transitionEnter={ false }
              transitionLeave={ false }
            >
              <ul>{ randomFirstSnu.keywords.map((keyword, idx) => 
                <li key={ idx }>
                  <button onClick={ () => this.fetchNextSnu(randomFirstSnu) }>
                    { keyword }
                  </button>
                </li>) }
              </ul> 
            </ReactCSSTransitionGroup>
          )
          }
        </div>
      );
    }
    return <div>Loading ...</div>
  }

  handleDoneReading(snu) {
    const { setToRead, getSnusMatchingKeyword } = this.props;
    const id = snu._id; 
    if (snu.keywords.length > 0 && setToRead) {
      // setToRead(id, snu);

      this.setState({ showTitles: true });

      const randomIndex = Math.floor(Math.random() * snu.keywords.length);
      const randomKeyword = snu.keywords[randomIndex];
      console.log('This is the randomKeyword :', randomKeyword);
      getSnusMatchingKeyword(randomKeyword);
    } else {
        // IF IT DOESN'T dispatch the randomnext action (action II)
        console.log('Here will soon be the select random next snu action :)');
    } 
  }

  fetchNextSnu(snu) {
          // IF IT HAS

            // axios.get(ROOT/snu/keyword) <-- create new route for that! (ROUTE I)
              // do all the database BRAINFUCK
              // if there is a fitting snu, thats great
              // if there isnt  dispatch (action II)
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
