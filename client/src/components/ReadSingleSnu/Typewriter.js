import React, { Component } from 'react';

export default class TypeWriter extends Component {
  static defaultProps = {
    children: ''
  };

  state = {
    sentence: this.props.children,
    count: 0,
    typed: ''
  };

  componentDidMount() {
    const { sentence } = this.state;
    sentence.length && this.type();
  }

  type() {
    const { count, typed, sentence } = this.state;
    if (sentence.length === 0 || count === sentence.length) {
      return;
    }

    this.setState({
      typed: typed.concat(sentence[count]),
      count: count + 1
    });

    setTimeout(() => this.type(), 80);
  }


  render() {
    const { className } = this.props;
    const { typed } = this.state;
    return <div className={className}>{typed}</div>;
  }
}