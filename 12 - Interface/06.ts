// Implement Interface
// TypeScript Interface cũng cho phép một class cài đặt nó.

interface IEmployee {
    empCode: number;
    name: string;
    getSalary:(number)=>number;
}
class Employee implements IEmployee {
    empCode: number;
    name: string;
    constructor(code: number, name: string) {
        this.empCode = code;
        this.name = name;
    }
    getSalary(empCode:number):number {
        return 20000;
    }
}
let emp = new Employee(1, "Steve");
console.log(emp);
//Employee { empCode: 1, name: 'Steve' }