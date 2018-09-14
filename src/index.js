import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'mobx-react';
import EmployeeStore from './store/EmployeeStore';
import registerServiceWorker from './registerServiceWorker';

const Root = (<Provider employeeStore={new EmployeeStore()}><App/></Provider>)

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
