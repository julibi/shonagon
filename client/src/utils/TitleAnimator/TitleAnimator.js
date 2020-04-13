import React, { Component } from 'react';
import classNames from 'classnames';
import './TitleAnimator.css';

export default class TitleAnimator extends Component {
  constructor(props) {
    super(props);
    this.bla = this.bla.bind(this);
    this.blub = this.blub.bind(this);
    this.lala = this.lala.bind(this);
    this.state = {
      alphabet: 'abcdefghijklmnopqrstuvwxyzöäüß0123456789 ',
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
    
    if (char === originalChar) {
      return char;
    }
    if (originalChar == ' ') {
      return ' ';
    }
    if (originalChar === originalChar.toUpperCase()) {
      isOriginalCharUppercase = true;
    }
    if (char === char.toUpperCase()) {
      isCharUppercase = true;
    }
    if (!isOriginalCharUppercase && isCharUppercase) {
      return char.toLowerCase();
    }
    if (isOriginalCharUppercase && !isCharUppercase) {
      return char.toUpperCase();
    }
  }

  blub(char, originalChar) {
    const currentCharCode = char.charCodeAt();
    const targetCharCode = originalChar.charCodeAt();
    
    if (currentCharCode === targetCharCode) {
      return char;
    }
    if (currentCharCode < targetCharCode) {
       return String.fromCharCode(currentCharCode + 1);
    }
    if (currentCharCode > targetCharCode) {
      return String.fromCharCode(currentCharCode + 1);
   }

  }

  lala(char) {
    const { alphabet, count } = this.state;
    if(char == ' ') {
      this.setState({ count: 0 });
      return alphabet[this.state.count]
    }
    this.setState({ count: count + 1 });
    return char;
  }

  changeLetter() {
    const { alphabet, originalTitle, animatedTitle, count } = this.state;

    if (originalTitle === animatedTitle) {
      this.setState({ isFinished: true });
      return this.props.onFinish();
    }

    const updatedAnimatedTitle =
      animatedTitle
      .split('')
      .map((letter, index) =>
        ((letter == originalTitle[index])
        ? this.bla(letter, originalTitle[index])
        // : alphabet[index+count]
        : this.lala(alphabet[index+count])
        // : this.blub(letter, originalTitle[index])
      ))
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