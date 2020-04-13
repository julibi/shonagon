import React, { Component } from 'react';
import classNames from 'classnames';
import './TitleAnimator.css';

export default class TitleAnimator extends Component {
  constructor(props) {
    super(props);
    this.bla = this.bla.bind(this);
    this.state = {
      alphabet: 'SHANGHAI SHONAGONabcdefghijklmnopqrstuvwxyzöäüß0123456789 ',
      originalTitle: this.props.children,
      animatedTitle: '',
      count: 0,
      isFinished: false
    };
  }

  componentDidMount() {
    const { originalTitle, alphabet, animatedTitle, count } = this.state;
    const initialAnimatedTitle = alphabet.slice(0, originalTitle.length);
  
    if (animatedTitle === '' && count === 0) {
      this.setState({ animatedTitle: initialAnimatedTitle });
    }
    setTimeout(() => this.changeLetter(), 3000);
  }

  bla(char, originalChar) {
    let isOriginalCharUppercase = false;
    let isCharUppercase = false;
    
    if (originalChar == ' ') {
      return ' ';
    }
    if (originalChar === originalChar.toUpperCase()) {
      isOriginalCharUppercase = true;
    }
    if (char === char.toUpperCase()) {
      isCharUppercase = true;
    }
    if ((isOriginalCharUppercase && isCharUppercase) || (!isOriginalCharUppercase && !isCharUppercase)) {
      return char;
    }
    if (!isOriginalCharUppercase && isCharUppercase) {
      return char.toLowerCase();
    }
    if (isOriginalCharUppercase && !isCharUppercase) {
      return char.toUpperCase();
    }
  }

  changeLetter() {
    const { alphabet, originalTitle, animatedTitle, count } = this.state;
    if (originalTitle === animatedTitle) {
      this.setState({ isFinished: true });
      return this.props.onFinish();
    }
    console.log(animatedTitle);
    const updatedAnimatedTitle =
      animatedTitle
      .split('')
      .map((letter, index) => ((letter == originalTitle[index]) ? this.bla(letter, originalTitle[index]) : alphabet[index+count])
      )
      .join('');
    
    this.setState({ animatedTitle: updatedAnimatedTitle, count: count + 1});
    setTimeout(() => this.changeLetter(), 80);
  }

  render() {
    const { className } = this.props;
    const { animatedTitle, isFinished } = this.state;
    return (
      <h1 className={classNames(className, isFinished && "finished")}>{animatedTitle}</h1>
    );
  }
}