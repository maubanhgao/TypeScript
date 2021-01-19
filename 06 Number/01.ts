let first:number = 123; // number
let second: number = 0x37CF;  // hexadecimal
let third:number=0o377 ;      // octal
let fourth: number = 0b111001;// binary

console.log(first);  // 123
console.log(second); // 14287
console.log(third);  // 255
console.log(fourth); // 57

// 123
// 14287
// 255
// 57

let myNumber: number = 123456;

console.log(myNumber.toExponential()); // returns 1.23456e+5
myNumber.toExponential(1); //returns 1.2e+5
myNumber.toExponential(2); //returns 1.23e+5
myNumber.toExponential(3); //returns 1.235e+5
