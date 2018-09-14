import { 
    //extendObservable,   
    configure,  
    observable,
    action,
    decorate, 
    computed 
} from 'mobx';

configure({enforceActions: true})
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

    loadEmployees(){
        fetch('https://randomuser.me/api/?results=5&seed=om')
        .then(resp => resp.json())
        .then(data => this.updateList(data.results))
    }

    updateList(employees){
        this.employees = employees;
    }

    remove(){
        this.employees.pop();
    }

}

decorate(EmployeeStore,{
   employees:observable,
   add:action,
   remove:action,
   show:action,
   updateList:action,
   loadEmployees: action,
   strength:computed
});

export default EmployeeStore;

