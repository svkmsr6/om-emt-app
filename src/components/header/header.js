import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="jumbotron">
        <img src={`/om.png`} className="App-logo" alt="logo" />
        <br />
        <br />
        <h3>EMPLOYEE MANAGEMENT TOOL</h3>
      </div>
    )
  }
}