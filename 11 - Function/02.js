// Arrow Function
// Function Arrow được sử dụng cho anonymous function
// Chúng có tên gọi khác trong các ngôn ngữ khác là lambda.
var sum = function (x, y) {
    return x + y;
};
console.log(sum(10, 20)); // 30
console.log("---------------------");
var Print = function () { return console.log("Hello TypeScript!"); };
// khong the dat print vi mac dinh da co ham print()
Print(); // Hello TypeScript!
console.log("---------------------");
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        var _this = this;
        this.display = function () { return console.log(_this.empCode + " " + _this.empName); };
        this.empCode = code;
        this.empName = name;
    }
    return Employee;
}());
var emp = new Employee(1, 'Ram');
emp.display(); //1 Ram
// Tham số Rest
// Một function có thể có 1 hoặc nhiều tham số. Sẽ có những trường hợp ta không biết được sẽ truyền bao nhiêu tham số trong function.
console.log("---------------------");
function Greet(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + " " + names.join(", ") + "!";
}
console.log(Greet("Hello", "Steve", "Bill")); // returns "Hello Steve, Bill!"
console.log(Greet("Hello")); // returns "Hello !"
