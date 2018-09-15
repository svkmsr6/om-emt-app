import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={`/om.png`} className="App-logo" alt="logo" />
        <h2 className="App-title">EMPLOYEE MANAGEMENT TOOL</h2>
      </header>
    )
  }
}
