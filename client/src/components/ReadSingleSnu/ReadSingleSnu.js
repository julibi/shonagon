import React, { Component } from 'react';
import './ReadSingleSnu.css';
import { getRandomSnu } from '../../actions';
import * as SNUS from '../../assets/snus.json';
import Typewriter from './Typewriter';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ReadSingleSnu extends Component {
  constructor(props) {
    super(props);
    this.state = { showTitles: false, text: '', firstSentence: '', firstLetter: '' };
  }

  componentDidMount() {
    const text = SNUS.SNUS[0].text;
    const firstSentence = SNUS.SNUS[0].beginning;
    const firstLetter = firstSentence[0];
    // console.log('text: ', text);
    this.setState({ text, firstSentence, firstLetter });
  }

  handleDoneReading(snu) {
    const { getSnusMatchingKeyword, getRandomSnu } = this.props;

    if (snu.keywords.length > 0) {
      const randomIndex = Math.floor(Math.random() * snu.keywords.length);
      const randomKeyword = snu.keywords[randomIndex];

      getSnusMatchingKeyword(randomKeyword);
      
      this.setState({ showTitles: true });

    } else {
      this.handleRandomSnu(snu);
    } 
  }

  fetchNextSnu(id, oldId, oldSnu) {

    const { fetchSnu, setToRead } = this.props;

    setToRead(oldId, oldSnu);
    fetchSnu(id);
    this.setState({ showTitles: false });

      // TAKE CARE OF 2 EDGE CASES:
        // the random endpoint sometimes returns the same as currentSnu
        // sometimes you filter by clicking on done reading but there are no snus left that
          // dispatch the random action
  }      

  handleRandomSnu(snu) {
    const { setToRead, getRandomSnu } = this.props;

    setToRead(snu._id, snu);
    getRandomSnu();
  }

  renderSNU() {
    const { text, firstSentence, firstLetter} = this.state;

    return (
      <div>
        <h1 className="fadeIn">Taxi</h1>
        <div className="text">
          <p>BLA</p>
          {/* BLA */}
        </div>
      </div>
    );
  }

  render() {
    const { text, firstSentence, firstLetter} = this.state;
    const shouldStart = (text.length && firstSentence.length && firstLetter.length);
    
    return (
      <div>
        { shouldStart ? <Typewriter className="typewriter">{ firstSentence }</Typewriter> : 'LOADING' }
      </div>
    );
  }
}


// TODO
// know what the first sentence is, cut it out
// know what the first letter is, cut that out too
// THEN
// first fade in the big letter
// type out the first sentence
// then fade in the rest