interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string,
}
/**
 * đối tượng customer sử dụng cấu trúc IPerson, thì lớp customer phải định nghĩa 2 thuộc tính firstName, lastName và phương thức sayHi giống như Interface.
 */
var customer: IPerson = {
  firstName: "Tom",
  lastName: "Hanks",
  sayHi: (): string => {return " Hi there"},
};
console.log("Customer Object");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi()) ;
// Customer Object
// Tom
// Hanks
// Hi there

console.log("----------------");
var employee:IPerson = {
    firstName: " Jim",
    lastName: "Blakes",
    sayHi: ():string => {return "Hello!"},
};
console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
// Employee  Object
// Jim
// Blakes

console.log("----------------");
// TypeScript Interface cũng dùng để định nghĩa kiểu của function.
interface KeyValueProcessor {
    (key: number, value: string): void;
}
function addKeyValue(key:number, value:string): void {
    console.log('addKeyValue: key = ' + key + ", value = " + value) ;
}
function updateKeyValue(key: number, value:string):void {
    console.log('updateKeyValue: key = '+ key + ', value = ' + value)
}

// let kvp = addKeyValue; nhu nhau
let kvp: KeyValueProcessor = addKeyValue;
kvp(1, "Bill"); // addKeyValue: key = 1, value = Bill

kvp = updateKeyValue;
kvp(2, 'Steve'); // updateKeyValue: key = 2, value = Steve

