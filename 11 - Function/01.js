// Function là một khối lệnh trong đó có nhiều dòng lệnh.
// Trong Typescript có 2 dạng function là name (tên) và anonymous (không tên).
function display() {
    console.log("Hello TypeScript!");
}
display(); //Hello TypeScript!
//Name Function
function Sum(x, y) {
    return x + y;
}
console.log(Sum(2, 3)); // 5
// Anonymos Function
var greeting = function () {
    console.log("Hello TypeScript!");
};
greeting(); //Hello TypeScript!
// Option Parameter
// Để đánh dấu tham số có thể truyền vào hay không ta dùng dấu ?
function Greet(greeting, name) {
    return greeting + " " + name + "!";
}
;
console.log(Greet('Hello', 'Steve')); // Hello Steve|
console.log(Greet('Hi')); //Hi undefined|
// Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3
function GreetDefalut(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + " " + name + "!";
}
console.log(GreetDefalut('Steve')); //OK, returns "Hello Steve!"
console.log(GreetDefalut('Steve', 'Hi')); // OK, returns "Hi Steve!".
console.log(GreetDefalut('Bill')); //OK, returns "Hello Bill!"
