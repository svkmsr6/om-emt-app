import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import logo from './logo.svg';
import './App.css';

const capSize = txt => txt.toUpperCase()

class App extends Component {
  componentDidMount(){
     this.props.employeeStore.loadEmployees();
  }

  render() {
    const {employeeStore} = this.props;
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          OM SHANTI OM
        </p>
        <hr />
        <ul>
          {employeeStore.employees.map(
            employee => (<li>{capSize(employee.name.last)},{capSize(employee.name.first)} - {capSize(employee.nat)}</li>)
          )}
        </ul>
        <hr />
        <button onClick={() => employeeStore.remove()}>REMOVE</button><br /><br />
        {employeeStore.strength}
      </div>
    );
  }
}

export default inject('employeeStore')(observer(App));
