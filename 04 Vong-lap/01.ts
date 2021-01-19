let arr = [10, 20, 30, 40];
for (let i = 0; i < arr.length; i++) {
    console.log ("Block statement execution no." + i);
}
console.log("--------------");
for (var val of arr) {
    console.log(val); // prints values: 10, 20, 30, 40
}
console.log("--------------");
for (var index in arr) {
    console.log(index); // prints indexes: 0, 1, 2, 3

    console.log(arr[index]); // prints elements: 10, 20, 30, 40
}