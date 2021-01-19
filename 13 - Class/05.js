// Abstract Class
// từ khoá abstract để ta biến một class thành một abstract class.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Một abstract class có thể có một hoặc nhiều phương thức abstract hoặc biến.
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.display = function () {
        console.log(this.name);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, code) {
        var _this = _super.call(this, name) || this;
        _this.empCode = code;
        return _this;
    }
    Employee.prototype.find = function (name) {
        // execute AJAX request to find an employee from a db
        return new Employee(name, 1);
    };
    return Employee;
}(Person));
var emp = new Employee("James", 100);
emp.display(); //James
var emp2 = emp.find('Steve');
console.log(emp2);
// Class mà extends một abstract class phải bắt buộc sử dụng từ khoá super trong constructor của mình.
