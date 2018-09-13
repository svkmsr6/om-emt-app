import { extendObservable, computed } from 'mobx';

export default class EmployeeStore{
    constructor(){
        extendObservable(this, {
            employees:['Antonio Durante','Franco Orafo'],
            get strength(){
                return this.employees.length;
            }
            //employeeStrength: computed(() => this.employees.length)
        });
    }    

    add(){
        this.employees.push('Rafael Somoza');
    }

    remove(){
        this.employees.pop();
    }

    show(){
        console.log(this.employees);
    }
}