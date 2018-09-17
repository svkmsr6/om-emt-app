import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import List from './list/list';

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
      this.setState({selectedID: idx});
  }

  render() {
    const {employeeStore} = this.props;
    // console.log(this.props);
    return (
      <React.Fragment>
          <List 
            employees={employeeStore.employees} 
            selectEmployee={idx => this.selectEmployee(idx)}
            capSize={capSize}
            downSize={downSize}
          />
      </React.Fragment>
    )
  }
}

export default inject('employeeStore')(observer(Body));
