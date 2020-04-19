import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
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
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
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
      currentSnu: null,
      isFinishedReading: false,
      shouldShowNextButton: false
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

    this.setState({ id, title, text, firstSentence, firstLetter });
    this.presentTitle();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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

  presentTitle() {
    this.setState({ shouldPresentTitle: true });
  } 

  presentFirstSentence() {
    setTimeout(() =>this.setState({ shouldPresentFirstSentence: true }), 1000);
  }

  presentText() {
    setTimeout(() => this.setState({ shouldPresentText: true }), 1000);
    // if (window.innerHeight >= document.body.scrollHeight) {
    //   console.log('bottom reached coz text is short');
    //   this.setState({ shouldShowNextButton: true });
    // }
  }

  handleClick() {
    this.setState({ isFinishedReading: true });
  }

  handleScroll() {
    if (((window.innerHeight + window.scrollY) >= document.body.scrollHeight) && this.state.text.length > 1) {
      console.log('bottom reacheds');
      this.setState({ shouldShowNextButton: true });
    }
  }

  render() {
    const {
      title,
      firstLetter,
      firstSentence,
      text,
      shouldPresentTitle,
      shouldPresentFirstSentence,
      shouldPresentText,
      isFinishedReading,
      shouldShowNextButton
    } = this.state;

    return (
      <Fragment>
        <button
          classNames={ classNames(
            shouldShowNextButton ?
            "specialButtonShow" :
            "specialButton"
          ) }
        >
          {"finishd reading"}</button>
        <div className={ classNames("snuWrapper", isFinishedReading && "test") }>
          { shouldPresentTitle &&
            <TitleAnimator
              className="snuTitle"
              onFinish={ this.presentFirstSentence }
            >
              { title }
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
      </Fragment>
    );
  }
}

