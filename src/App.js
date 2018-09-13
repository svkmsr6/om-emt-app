import React, { Component } from 'react';
import { observer } from 'mobx-react';
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
        <button onClick={() => employeeStore.add()}>ADD</button><br /><br />
        <button onClick={() => employeeStore.show()}>SHOW</button><br /><br />
        {employeeStore.strength}
      </div>
    );
  }
}

export default observer(App);
