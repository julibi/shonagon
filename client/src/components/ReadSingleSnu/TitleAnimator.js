import React, { Component } from 'react';
import classNames from 'classnames';
import './TitleAnimator.css';

export default class TitleAnimator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alphabet: 'SHANGHAISHONAGONAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvXwXxYyZzÖöÄäÜüß',
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
        ((letter === originalTitle[index]) ? letter : alphabet[index+count])
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