import React, { Component } from 'react';
import './list.css';

export default class List extends Component {
  render() {
    const {employees, selectEmployee, capSize, downSize, selectedID} = this.props;
    return (
    //<React.Fragment>
      <ul className="list-group col-xs-12 col-sm-6 col-md-4 col-lg-4">
      {employees.map(
        (employee, idx) => (
        <li 
          key={idx} 
          className="App-employee list-group-item" 
          style={{
            backgroundColor: (this.props.selectedID === idx)?'blue':null,
            color:(this.props.selectedID === idx)?'beige':null,
            fontWeight:(this.props.selectedID === idx)?'bold':null,
          }}
          onClick={() => selectEmployee(idx)}
        >
          <div 
           className="App-employee-img"           
           >
            <img src={employee.picture.thumbnail} alt={idx} />
            <p style={{paddingLeft: 20, fontSize: 13}}>{capSize(employee.name.first)} {capSize(employee.name.last)}</p>
          </div>          
          <div className={`flag flag-${downSize(employee.nat)}`} title={employee.nat}  />
        </li>        
      ))}
      </ul>
    //</React.Fragment>
    )
  }
}
