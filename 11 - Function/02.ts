// Arrow Function
// Function Arrow được sử dụng cho anonymous function
// Chúng có tên gọi khác trong các ngôn ngữ khác là lambda.
let sum = (x: number, y: number): number => {
    return x + y;
};
console.log(sum(10, 20)); // 30

console.log("---------------------");
let Print = () => console.log("Hello TypeScript!");
// khong the dat print vi mac dinh da co ham print()
Print(); // Hello TypeScript!

console.log("---------------------");
class Employee {
    empCode: number;
    empName: string;
    constructor(code:number, name: string) {
        this.empCode = code;
        this.empName = name;
    }

    display = () => console.log(this.empCode + " " + this.empName);
}
let emp = new Employee(1, 'Ram');
emp.display(); //1 Ram

// Tham số Rest
// Một function có thể có 1 hoặc nhiều tham số. Sẽ có những trường hợp ta không biết được sẽ truyền bao nhiêu tham số trong function.
console.log("---------------------");
function Greet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}
console.log(Greet("Hello", "Steve", "Bill")); // returns "Hello Steve, Bill!"
console.log(Greet("Hello"));// returns "Hello !"

// Như 2 ví dụ trên ta đặt … ở cuối function mới hợp lệ, nếu ta đặt … ở đầu sẽ báo lỗi.
//bởi vì trước giờ tham số rest luôn đặt cuối cùng. xem lại lý thuyếts
// function GreetingFirst(...names:string[], greeting: string) {
// return greeting + " " + names.join(", ") + "!";
// }


