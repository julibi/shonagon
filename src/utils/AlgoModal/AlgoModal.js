import React, { Component }  from 'react';
import './AlgoModal.css';

export default class AlgoModal extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <div ref={this.setWrapperRef} className="modal">
        <header>
          {'I AM A MODAL...'}
        </header>
      </div>
    );
  }
}