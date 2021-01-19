var myNumber = new Number(123);
console.log(myNumber); //Output: a number object with value 123
console.log(myNumber.valueOf()); //Output: 123
var num = {
    name: 'nguyen'
};
console.log(typeof num); //Output: object
var num2 = num.valueOf();
console.log(num2); //Output: 123
console.log(typeof num2); //Output: number
