import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="jumbotron">
        <img src={`/img/om.png`} className="App-logo" alt="logo" />
        {/* <div className="flag flag-fi" alt="logo" /> */}
        {/* <br /> */}
        <br />
        <br />
        <h4>EMPLOYEE SURVEILLANCE TOOL</h4>
      </div>
    )
  }
}
