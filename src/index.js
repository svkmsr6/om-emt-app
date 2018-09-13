import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EmployeeStore from './store/EmployeeStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App employeeStore={new EmployeeStore()} />, document.getElementById('root'));
registerServiceWorker();
