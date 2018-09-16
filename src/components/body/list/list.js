import React, { Component } from 'react';
import './list.css';

export default class List extends Component {
  render() {
    const {employees, selectEmployee, capSize} = this.props;
    return (
    <React.Fragment>
      <ul className="list-group">
      {employees.map(
        (employee, idx) => (
        <li key={idx} className="App-employee list-group-item" onClick={() => selectEmployee(idx)}>
          <div className="App-employee-img">
            <img src={employee.picture.thumbnail} alt={idx} />
          </div>
          <p>{capSize(employee.name.first)} {capSize(employee.name.last)} - {capSize(employee.nat)}</p>
        </li>        
      ))}
      </ul>
    </React.Fragment>
    )
  }
}
