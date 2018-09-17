import React, { Component } from 'react'

export default class Info extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
        {
          (this.props.employee !== null)?
          (<span>GREAT</span>):
          (<div style={{color:'grey', display:'flex', justifyContent:'center'}}>
            <h1 style={{marginTop:'20%'}}>SELECT TO VIEW INFO</h1>
          </div>)
        }
      </div>
    )
  }
}
