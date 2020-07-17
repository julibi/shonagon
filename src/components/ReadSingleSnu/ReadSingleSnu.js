import React, { Component } from 'react';
import classNames from 'classnames';
import './ReadSingleSnu.css';
import * as snus from '../../assets/snus.json';
import TypeWriter from '../../utils/TypeWriter';
import TitleAnimator from '../../utils/TitleAnimator';
import EndModal from '../EndModal';

  // TODO:
  // - divide json text by /n and let the texts flow in
  // - OVERALL DESIGN
  // - Mobile View!
  // - adjust snus
  // - add a navigation?
  //   - Exposé
  //   - about the author
  // -Logik für Texte die selten vorkommen, weil sie kaum oder wenige Tags haben
  // -FIX ID 12 Button bug!!!
  // try disabling Javascript
  // make note to enable javascript?

export default class ReadSingleSnu extends Component {
  constructor(props) {
    super(props);
    this.presentText = this.presentText.bind(this);
    this.presentFirstSentence = this.presentFirstSentence.bind(this);
    this.getAllTags = this.getAllTags.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
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
      isFinishedReading: false,
      shouldShowNextButton: false,
      shouldShowEndModal: false,
      uniqueTags: [],
      readSnus: [],
      SNUS: []
    };
  }

  componentDidMount() {
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
    const firstSentence = snu.firstSentence;
    const tags = snu.tags;
    const updatedReadSnus = [ ...readSnus, snu.id ];
    this.setState({ id, title, text, firstSentence, tags, readSnus: updatedReadSnus, SNUS });

    this.presentTitle();
    this.getAllTags();
  }

  async reloadNext() {
    window.scrollTo(0, 0)
    const { SNUS } = snus;
    const { tags, count, readSnus } = this.state;

    if(readSnus.length === 24) {
      return await this.setState({
        shouldPresentTitle: false,
        shouldPresentFirstSentence: false,
        shouldPresentText: false,
        shouldShowNextButton: false,
        shouldShowEndModal: true
      });
    }

    // NEXT UP: Build another Modal that shows after the 2nd SNU, explaining the project and linking to the Exposé (Exposé+Author+About all in 1 metapage!)

    const tag = tags[Math.floor(Math.random() * tags.length)];
    const candidates = SNUS.filter(snu => snu.tags.includes(tag) && !readSnus.includes(snu.id));
    let newSnu;

    if (candidates.length === 0) {
      console.log('case 1');
      const unreadSnus = SNUS.filter(snu => !readSnus.includes(snu.id));
      newSnu = unreadSnus[Math.floor(Math.random() * unreadSnus.length)]
    }
    if (candidates.length === 1) {
      console.log('case 2');
      newSnu = candidates[0]
    }
    if (candidates.length > 1) {
      console.log('case 3');
      newSnu = candidates[Math.floor(Math.random() * candidates.length)];
    }

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
      readSnus: [ ...readSnus, newSnu.id ]   
    });

    this.presentTitle();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getAllTags() {
    const { SNUS } = snus;
    let tags = [];
    SNUS
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

    setTimeout(() => {
      (document.body.offsetHeight <= window.innerHeight)
      ? this.setState({ shouldShowNextButton: true })
      : this.addScroll()
    }
    , 3000);
  }

  addScroll() {
    window.addEventListener('scroll', () => {
      this.handleScroll();
    });
  }

  async handleClick() {
    await this.setState({
      isFinishedReading: true,
      shouldShowNextButton: false
    });

    this.reloadNext();
  }

  handleScroll() {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 5)) {
      this.setState({ shouldShowNextButton: true });
    }
  }

  render() {
    const {
      id,
      title,
      firstSentence,
      text,
      shouldPresentTitle,
      shouldPresentFirstSentence,
      shouldPresentText,
      isFinishedReading,
      shouldShowNextButton,
      shouldShowEndModal,
      SNUS,
      readSnus
    } = this.state;

    return (
      <div className="container">
        <EndModal show={shouldShowEndModal} className="modalFadeIn"/>
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
            <section className="mainContent">
              <div className="textWrapper">
                <p className="text">
                  {text}
                </p>
              </div>
              <div className="chapertsWrapper">
                {SNUS.length > 0 &&
                  <ul className={classNames("chapters")}>
                    {SNUS.map((snu, idx) =>
                      <li
                        key={idx}
                        className={classNames(
                          (readSnus.includes(snu.id) && (snu.id !== id)) && "crossedThrough",
                          snu.id === id && "bold"
                        )}
                      >
                        {snu.title}
                      </li>
                    )}
                  </ul>
                }
              </div>
            </section>
            }
          </div>
        { shouldPresentText && shouldShowNextButton &&
          <button
            onClick={ this.handleClick }
            className={classNames("nextButton", isFinishedReading && "snuFadeOut") }
          >
            {"Weiter lesen"}
          </button>
        }
      </div>
    );
  }
}

