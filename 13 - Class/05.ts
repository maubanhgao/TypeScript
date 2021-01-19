// Abstract Class
// từ khoá abstract để ta biến một class thành một abstract class.

// Một abstract class có thể có một hoặc nhiều phương thức abstract hoặc biến.

abstract class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    display(): void{
        console.log(this.name);
    }
    abstract find(string): Person;
}
class Employee extends Person {
    empCode: number;
    constructor(name: string, code: number) {
        super(name); // must call super()
        this.empCode = code;
    }
    find(name:string): Person {
        // execute AJAX request to find an employee from a db
        return new Employee(name, 1);
    }
}
let emp: Person = new Employee("James", 100);
emp.display();
let emp2: Person = emp.find('Steve');
console.log(emp2);
// James
// Employee { name: 'Steve', empCode: 1 }


// Class mà extends một abstract class phải bắt buộc sử dụng từ khoá super trong constructor của mình.


