// Chúng ta sử dụng Tuple để chứa 2 hoăc nhiều giá trị có kiểu dữ liệu khác nhau,
var empId = 1;
var empName = "Steve";
var employee = [1, "Steve"];
console.log(employee);
// [ 1, 'Steve' ]
console.log("----------------");
var person = [1, "Steve", true];
var user;
// declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
console.log(person); //[ 1, 'Steve', true ]
console.log(user); //[ 1, 'Steve', true, 20, 'Admin' ]
console.log("----------------");
// mảng Tuple:
var employees;
employees = [
    [1, "Steve"],
    [2, "Bill"],
    [3, "Jeff"]
];
console.log(employees[0]); // [ 1, 'Steve' ]
console.log("----------------");
employee.push(2, 'Bill');
console.log(employee);
// [ 1, 'Steve', 2, 'Bill' ]
console.log("----------------");
employee[1] = employee[1].concat(" Jobs");
console.log(employee);
