import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import './ReadSingleSnu.css';
import * as snus from '../../assets/snus.json';
import TypeWriter from '../../utils/TypeWriter';
import TitleAnimator from '../../utils/TitleAnimator';
import AlgoModal from '../../utils/AlgoModal';

  // TODO: 1 - after the third snu, show the modal and tell a little bit about the algo
  // TODO: 2 - ask of what kind of things interest them in the story, let them select tags and continue reading
  // TODO: 3 - tell them, that more SNUs will be added, and 
  // ABER: Es muss Key-szenen geben, die immer gezeigt werden, egal, wie sich der Leser entscheidet 

export default class ReadSingleSnu extends Component {
  constructor(props) {
    super(props);
    this.presentText = this.presentText.bind(this);
    this.presentFirstSentence = this.presentFirstSentence.bind(this);
    this.getAllTags = this.getAllTags.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.reloadNext = this.reloadNext.bind(this);
    this.state = {
      count: 0,
      id: null,
      title: '',
      firstSentence: '',
      text: '',
      tags: [],
      shouldPresentTitle: false,
      shouldPresentFirstSentence: false,
      shouldPresentText: false,
      alreadyReadSnus: [],
      isFinishedReading: false,
      shouldShowNextButton: false,
      shoudldShowAlgoModal: false,
      uniqueTags: [],
      readSnus: [] 
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    const { SNUS } = snus;
    const { count, readSnus } = this.state;
    let snu;

    if (count === 0) {
      snu = SNUS.find(snu => snu.id === 6);
    } else {
      snu = SNUS[Math.floor(Math.random() * SNUS.length)];
    }
    
    const id = snu.id;
    const title = snu.title;
    const text = snu.text;
    const firstSentence = snu.beginning;
    const tags = snu.tags;
    const updatedReadSnus = [ ...readSnus, snu.id ];
    this.setState({ id, title, text, firstSentence, tags, readSnus: updatedReadSnus });

    this.presentTitle();
    this.getAllTags();
  }

  async reloadNext() {
    const { SNUS } = snus;
    const { tags, count, readSnus } = this.state;
    const tag = tags[Math.floor(Math.random() * tags.length)];
    const candidates = SNUS.filter(snu => snu.tags.includes(tag) && !readSnus.includes(snu.id));
    const newSnu = candidates[Math.floor(Math.random() * candidates.length)];

    await this.setState({
      isFinishedReading: false,
      count: count + 1,
      id: newSnu.id,
      title: newSnu.title,
      text: newSnu.text,
      firstSentence: newSnu.firstSentence,
      tags: newSnu.tags,
      shouldPresentTitle: false,
      shouldPresentFirstSentence: false,
      shouldPresentText: false,
      shouldShowNextButton: false,
      updatedReadSnus: [ ...readSnus, newSnu.id ]   
    });

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
      (document.body.offsetHeight <= window.innerHeight)
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
    await this.setState({
      isFinishedReading: true 
    });

    this.reloadNext();
  }

  handleScroll() {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 5)) {
      this.setState({ shouldShowNextButton: true });
    }
  }

  handleCloseModal() {
    this.setState({ shoudldShowAlgoModal: false });
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
        {/* {shoudldShowAlgoModal && <AlgoModal onClose={this.handleCloseModal}/>} */}
      </Fragment>
    );
  }
}

