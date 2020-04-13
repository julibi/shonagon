import React, { Component } from 'react';
import './ReadSingleSnu.css';
import { getRandomSnu } from '../../actions';
import * as snus from '../../assets/snus.json';
import TypeWriter from '../../utils/TypeWriter';
import TitleAnimator from '../../utils/TitleAnimator';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ReadSingleSnu extends Component {
  constructor(props) {
    super(props);
    this.presentText = this.presentText.bind(this);
    this.presentFirstSentence = this.presentFirstSentence.bind(this);
    this.getAllTags = this.getAllTags.bind(this);
    this.state = {
      id: null,
      title: '',
      firstLetter: '',
      firstSentence: '',
      text: '',
      shouldPresentTitle: false,
      shouldPresentFirstSentence: false,
      shouldPresentText: false,
      alreadyReadSnus: [],
      currentSnu: null
    };
  }

  componentDidMount() {
    const { SNUS } = snus;
    const snu = SNUS[Math.floor(Math.random() * SNUS.length)];
    const id = snu.id;
    const title = snu.title;
    const text = snu.text;
    const firstSentence = snu.beginning;
    const firstLetter = firstSentence[0];
    console.log(title);
    this.setState({ id, title, text, firstSentence, firstLetter });
    this.presentTitle();
    // this.getAllTags();
  }

  getAllTags() {
    const { SNUS } = snus;
    let tags = [];
    const test = SNUS
      .map(textunit =>
        textunit.tags
        .map(tag =>
          tags.push(tag)
        )
      );
    const uniqueTags = tags.filter((v, i, a) => a.indexOf(v) === i); 
  }

//   5ar8ouge
// TitleAnimator.js:54 BarRouge
// TitleAnimator.js:55 6ar9ouge
// TitleAnimator.js:54 BarRouge
// TitleAnimator.js:55 7ar ouge
// TitleAnimator.js:54 BarRouge
// TitleAnimator.js:55 8arouge
// TitleAnimator.js:54 BarRouge
// TitleAnimator.js:55 9ar
// TitleAnimator.js:54 BarRouge
// TitleAnimator.js:55  ar
// TitleAnimator.js:54 BarRouge
// TitleAnimator.js:55 ar
// TitleAnimator.js:54 BarRouge

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
    console.log(this.state);

    return (
      <div className="snuWrapper">
        { shouldPresentTitle &&
          <TitleAnimator
            className="snuTitle"
            onFinish={ this.presentFirstSentence }
          >
            { 'BarRouge' }
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

