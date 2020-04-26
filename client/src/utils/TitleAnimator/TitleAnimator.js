import React, { Component } from 'react';
import classNames from 'classnames';
import './TitleAnimator.css';

export default class TitleAnimator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alphabet: 'abcdefghijklmnopqrstuvwxyzöäüß0123456789 abcdefghijklmnopqrstuvwxyzöäüß0123456789',
      originalTitle: this.props.children,
      lowercaseOriginalTitle: this.props.children.toLowerCase(),
      animatedTitle: '',
      count: 0,
      isFinished: false
    };
  }

  componentDidMount() {
    const { originalTitle, alphabet, animatedTitle, count } = this.state;
    const initialAnimatedTitle = alphabet.slice(0, originalTitle.length);
  
    if (!animatedTitle.length && !count) {
      this.setState({ animatedTitle: initialAnimatedTitle });
    }
    setTimeout(() => this.changeLetter(), 3000);
  }

  changeLetter() {
    const { alphabet, originalTitle, animatedTitle, count, lowercaseOriginalTitle } = this.state;

    // TODO: check if the first possible condition can ever be true…
    if (lowercaseOriginalTitle == animatedTitle || count > 60) {
      this.setState({
        animatedTitle: originalTitle,
        isFinished: true
      });
      return this.props.onFinish();
    }

    const updatedAnimatedTitle =
      animatedTitle
      .split('')
      .map((letter, index) => ((letter == originalTitle[index]) ? letter : alphabet[index+count]))
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