import React, { Component } from 'react';
import './info.css';

export default class Info extends Component {
  render() {
    const { employee, selectEmployee, capSize, downSize } = this.props;
    return (
      <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8" style={{}}>
        {
          (employee !== null)?
          (<div className="card">
            <div style={{padding: 10}}>
              <button className="btn btn-primary" onClick={()=>selectEmployee(-1)}>Back</button>
            </div>
            <div style={{textAlign:'center', padding: '2%'}}>
              <img className="rounded-circle App-info-img" src={employee.picture.large} alt="Card image" /><br />
              <div className={`flag flag-${downSize(employee.nat)}`} title={employee.nat} />
            </div>            
            <div className="card-body">
              <h4 className="card-title">{capSize(employee.name.first)} {capSize(employee.name.last)}</h4>
              <p className="card-text">{capSize(employee.location.street)}</p>
              <p className="card-text">{capSize(employee.location.city)}</p>
              <p className="card-text">{capSize(employee.location.state)} {capSize((employee.location.postcode).toString())}</p>
              <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                <span><img src="/img/call.png" />{employee.phone}</span>
                <span><img src="/img/mail.png" />{'     '}{employee.email}</span>
              </div>
              {/* <button className="btn btn-primary" onClick={()=>selectEmployee(-1)}>Back</button> */}
            </div>
          </div>):
          (<div style={{color:'grey', display:'flex', justifyContent:'center'}}>
            <h1 style={{marginTop:'20%'}}>SELECT TO VIEW INFO</h1>
          </div>)
        }
      </div>
    )
  }
}
