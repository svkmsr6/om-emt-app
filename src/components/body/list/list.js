import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {employees, selectEmployee, capSize} = this.props;
    return (
    <React.Fragment>
      {employees.map(
        (employee, idx) => (
        <div key={idx} className="App-employee">
          <div className="App-employee-img" onClick={() => selectEmployee(idx)}>
            <img src={employee.picture.thumbnail} alt={idx} />
          </div>
          <p>{capSize(employee.name.last)},{capSize(employee.name.first)} - {capSize(employee.nat)}</p>
        </div>        
      ))}
    </React.Fragment>
    )
  }
}
