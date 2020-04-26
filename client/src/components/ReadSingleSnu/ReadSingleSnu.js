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
    const { shouldPresentText } = this.state;

    this.setState({ id, title, text, firstSentence, firstLetter });
    this.presentTitle();
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

  async presentText() {
    await this.setState({ shouldPresentText: true });

    setTimeout(() =>
      ((window.innerHeight + window.scrollY) >= document.body.scrollHeight)
      ? this.setState({ shouldShowNextButton: true })
      : this.addScroll()
    , 3000);
  }

  addScroll() {
    window.addEventListener('scroll', () => {
      this.handleScroll();
    });
  }

  handleClick() {
    this.setState({ isFinishedReading: true });
  }

  handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
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
        <div className={ classNames("snuWrapper", isFinishedReading && "snuFadeOut") }>
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
          { shouldPresentText && <p className="text">{"text grzeu grheuia grheu igrehua gre grheauil grh eu"}</p> }
        </div>
        { shouldShowNextButton && <button className={"test"}>{"finishd reading"}</button> }
      </Fragment>
    );
  }
}

