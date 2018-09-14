import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
          Viva La Revolucion!
        </p>
        <hr />
        <ul>
          {employeeStore.employees.map(employee => (<li>{employee}</li>))}
        </ul>
        <hr />
        <button onClick={() => employeeStore.add()}>ADD</button><br /><br />
        <button onClick={() => employeeStore.show()}>SHOW</button><br /><br />
        <button onClick={() => employeeStore.remove()}>REMOVE</button><br /><br />
        {employeeStore.strength}
      </div>
    );
  }
}

export default inject('employeeStore')(observer(App));
