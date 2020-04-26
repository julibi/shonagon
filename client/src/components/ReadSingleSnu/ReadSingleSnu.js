import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import './ReadSingleSnu.css';
import * as snus from '../../assets/snus.json';
import TypeWriter from '../../utils/TypeWriter';
import TitleAnimator from '../../utils/TitleAnimator';
import AlgoModal from '../../utils/AlgoModal';

export default class ReadSingleSnu extends Component {
  constructor(props) {
    super(props);
    this.presentText = this.presentText.bind(this);
    this.presentFirstSentence = this.presentFirstSentence.bind(this);
    this.getAllTags = this.getAllTags.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      count: 0,
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
      shouldShowNextButton: false,
      shoudldShowAlgoModal: false,
      uniqueTags: []      
    };
  }

  componentDidMount() {
    const { SNUS } = snus;
    const snu = SNUS[Math.floor(Math.random() * SNUS.length)];
    const id = snu.id;
    const title = snu.title;
    const text = snu.text;
    const firstSentence = snu.beginning;

    this.setState({ id, title, text, firstSentence });
    this.presentTitle();
    this.getAllTags();
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
    this.setState({ uniqueTags });
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

  async handleClick() {
    const { count } = this.state;
    await this.setState({ isFinishedReading: true });
    
    if (!count) {
      this.setState({ shoudldShowAlgoModal: true });
    } else {
      console.log('The logic to pull up the next SNU.');
    }
  }

  // partialReset() {
  //   this.setState({
  //     id: null,
  //     title: '',
  //     firstLetter: '',
  //     firstSentence: '',
  //     text: '',
  //     shouldPresentTitle: false,
  //     shouldPresentFirstSentence: false,
  //     shouldPresentText: false    
  //   });
  // }

  handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      this.setState({ shouldShowNextButton: true });
    }
  }

  render() {
    const {
      title,
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
          { shouldPresentText &&
            <p className="text">
              {text}
            </p>
          }
        </div>
        { shouldShowNextButton &&
          <button
            onClick={ this.handleClick }
            className={classNames("nextButton", isFinishedReading && "snuFadeOut") }
          >
            {"Weiter lesen"}
          </button>
        }
        {isFinishedReading && <AlgoModal />}
      </Fragment>
    );
  }
}

