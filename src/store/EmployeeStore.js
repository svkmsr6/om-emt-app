import { 
    //extendObservable, 
    observable,
    action,
    decorate, 
    computed 
} from 'mobx';

class EmployeeStore{
    //constructor(){
        // extendObservable(this, {
        //     employees:['Antonio Durante','Franco Orafo'],
        //     get strength(){
        //         return this.employees.length;
        //     }
        // });
    //}   
    employees = [];

    get strength(){
        return this.employees.length;
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

decorate(EmployeeStore,{
   employees:observable,
   add:action,
   remove:action,
   show:action,
   strength:computed
});

export default EmployeeStore;

