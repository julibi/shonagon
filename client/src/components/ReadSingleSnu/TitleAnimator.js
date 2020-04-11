import React, { Component } from 'react';
import './TitleAnimator.css';

export default class TitleAnimator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alphabet: 'abcdefghijklmnopqrstuvwxyzöäüß',
      originalTitle: this.props.children,
      animatedTitle: '',
      count: 0
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

  changeLetter() {
    const { alphabet, originalTitle, animatedTitle, count } = this.state;
    if (originalTitle === animatedTitle) return;
  
    const updatedAnimatedTitle =
      animatedTitle
      .split('')
      .map((letter, index) => 
        ((letter === originalTitle[index]) ? letter : alphabet[index+count])
      )
      .join('');
    
    this.setState({ animatedTitle: updatedAnimatedTitle, count: count + 1});
    setTimeout(() => this.changeLetter(), 80);
  }

  render() {
    const { className } = this.props;
    const { animatedTitle } = this.state;
    return (
      <h1 className={className}>{animatedTitle}</h1>
    );
  }
}