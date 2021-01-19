var arr = [10, 20, 30, 40];
for (var i = 0; i < arr.length; i++) {
    console.log("Block statement execution no." + i);
}
console.log("--------------");
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val); // prints values: 10, 20, 30, 40
}
console.log("--------------");
for (var index in arr) {
    console.log(index); // prints indexes: 0, 1, 2, 3
    console.log(arr[index]); // prints elements: 10, 20, 30, 40
}
