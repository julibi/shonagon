import React, { Component } from 'react';
import './TypeWriter.css';

export default class TypeWriter extends Component {
  static defaultProps = {
    children: '',
    hasHistoriatedInitial: false
  };

  state = {
    sentence: this.props.children,
    count: 0,
    typed: '',
    historiatedInitial: ''
  };

  componentDidMount() {
    const { sentence } = this.state;
    const { hasHistoriatedInitial } = this.props;
    (sentence.length && !hasHistoriatedInitial) && this.type();
    (sentence.length && hasHistoriatedInitial) && this.typeWithHistoriatedInitial();
  }

  type() {
    const { count, typed, sentence } = this.state;
    if (count === sentence.length) {
      return this.props.onFinish();
    }

    this.setState({
      typed: typed.concat(sentence[count]),
      count: count + 1
    });

    setTimeout(() => this.type(), 80);
  }

  typeWithHistoriatedInitial() {
    const { count, sentence } = this.state;

    this.setState({
      historiatedInitial: this.state.sentence[0],
      count: count + 1
    });

    setTimeout(() => this.type(), 1500);
  }


  render() {
    const { className, initialClassName, textClassName } = this.props;
    const { historiatedInitial, typed } = this.state;
    return (
      <div className="wrapper">
        <h1 className={initialClassName}>{ historiatedInitial }</h1>
        <p className={textClassName}>{typed}</p>
      </div>
    );
  }
}