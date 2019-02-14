import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import List from './list/list';
import Info from './info/info';

const capSize = txt => txt.toUpperCase()
const downSize = txt => txt.toLowerCase()

class Body extends Component {
  constructor(){
      super();
      this.state = {
          selectedID: -1
      };
  }

  componentDidMount(){
    this.props.employeeStore.loadEmployees();
  }

  selectEmployee(idx){
      console.log('Selected ID,',idx);
      this.setState({selectedID: idx});
  }

  render() {
    const {employeeStore} = this.props;
    // console.log(this.props);
    return (
      <div style={{display:'flex'}}>
          <List 
            employees={employeeStore.employees} 
            selectEmployee={idx => this.selectEmployee(idx)}
            capSize={capSize}
            downSize={downSize}
            selectedID={this.state.selectedID}
          />
          <Info
            employee={(this.state.selectedID >=0)?employeeStore.employees[this.state.selectedID]:null} 
            selectEmployee={idx => this.selectEmployee(idx)}
            capSize={capSize}
            downSize={downSize}
          />
      </div>
    )
  }
}

export default inject('employeeStore')(observer(Body));
