var first = 123; // number
var second = 0x37CF; // hexadecimal
var third = 255; // octal
var fourth = 57; // binary
console.log(first); // 123
console.log(second); // 14287
console.log(third); // 255
console.log(fourth); // 57
// 123
// 14287
// 255
// 57
var myNumber = 123456;
console.log(myNumber.toExponential()); // returns 1.23456e+5
myNumber.toExponential(1); //returns 1.2e+5
myNumber.toExponential(2); //returns 1.23e+5
myNumber.toExponential(3); //returns 1.235e+5
