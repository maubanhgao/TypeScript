/**
 * đối tượng customer sử dụng cấu trúc IPerson, thì lớp customer phải định nghĩa 2 thuộc tính firstName, lastName và phương thức sayHi giống như Interface.
 */
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return " Hi there"; }
};
console.log("Customer Object");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
// Customer Object
// Tom
// Hanks
// Hi there
console.log("----------------");
var employee = {
    firstName: " Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!"; }
};
console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
// Employee  Object
// Jim
// Blakes
console.log("----------------");
function addKeyValue(key, value) {
    console.log('addKeyValue: key = ' + key + ", value = " + value);
}
function updateKeyValue(key, value) {
    console.log('updateKeyValue: key = ' + key + ', value = ' + value);
}
// let kvp = addKeyValue; nhu nhau
var kvp = addKeyValue;
kvp(1, "Bill"); // addKeyValue: key = 1, value = Bill
kvp = updateKeyValue;
kvp(2, 'Steve');
