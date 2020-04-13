import React, { Component } from 'react';
import './ReadSingleSnu.css';
import { getRandomSnu } from '../../actions';
import * as SNUS from '../../assets/snus.json';
import TypeWriter from './TypeWriter';
import TitleAnimator from './TitleAnimator';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ReadSingleSnu extends Component {
  constructor(props) {
    super(props);
    this.presentText = this.presentText.bind(this);
    this.presentFirstSentence = this.presentFirstSentence.bind(this);
    this.state = {
      tite: '',
      firstLetter: '',
      firstSentence: '',
      text: '',
      shouldPresentTitle: false,
      shouldPresentFirstSentence: false,
      shouldPresentText: false
    };
  }

  componentDidMount() {
    const title = SNUS.SNUS[0].title;
    const text = SNUS.SNUS[0].text;
    const firstSentence = SNUS.SNUS[0].beginning;
    const firstLetter = firstSentence[0];

    this.setState({ title, text, firstSentence, firstLetter });
    this.presentTitle();
  }

  // handleDoneReading(snu) {
  //   const { getSnusMatchingKeyword, getRandomSnu } = this.props;

  //   if (snu.keywords.length > 0) {
  //     const randomIndex = Math.floor(Math.random() * snu.keywords.length);
  //     const randomKeyword = snu.keywords[randomIndex];

  //     getSnusMatchingKeyword(randomKeyword);
      
  //     this.setState({ showTitles: true });

  //   } else {
  //     this.handleRandomSnu(snu);
  //   } 
  // }

  // fetchNextSnu(id, oldId, oldSnu) {

  //   const { fetchSnu, setToRead } = this.props;

  //   setToRead(oldId, oldSnu);
  //   fetchSnu(id);
  //   this.setState({ showTitles: false });

  //     // TAKE CARE OF 2 EDGE CASES:
  //       // the random endpoint sometimes returns the same as currentSnu
  //       // sometimes you filter by clicking on done reading but there are no snus left that
  //         // dispatch the random action
  // }      

  // handleRandomSnu(snu) {
  //   const { setToRead, getRandomSnu } = this.props;

  //   setToRead(snu._id, snu);
  //   getRandomSnu();
  // }

  presentTitle() {
    this.setState({ shouldPresentTitle: true });
  } 

  presentFirstSentence() {
    setTimeout(() =>this.setState({ shouldPresentFirstSentence: true }), 1000);
  }

  presentText() {
    setTimeout(() => this.setState({ shouldPresentText: true }), 1000);
  }

  render() {
    const {
      title,
      firstLetter,
      firstSentence,
      text,
      shouldPresentTitle,
      shouldPresentFirstSentence,
      shouldPresentText
    } = this.state;

    return (
      <div className="snuWrapper">
        { shouldPresentTitle &&
          <TitleAnimator
            className="snuTitle"
            onFinish={ this.presentFirstSentence }
          >
              {'taxi'}
          </TitleAnimator>
        }
        { shouldPresentFirstSentence &&
          <TypeWriter
            initialClassName="historiatedInitial"
            textClassName="typedText"
            hasHistoriatedInitial
            onFinish={ this.presentText }
          >
            { firstSentence }
          </TypeWriter>
        }
        { shouldPresentText && <p className="text">{text}</p> }
      </div>
    );
  }
}

