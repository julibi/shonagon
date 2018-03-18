import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LogIn.css';

export default class LogIn extends Component {
  render() {
    return (
      <button
      className="LogInButton"
      >
        Log In
      </button>
    );
  }
}
