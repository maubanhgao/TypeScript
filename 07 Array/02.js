var fruits = ['Apple', 'Orange', 'Banana'];
console.log(fruits[0]); // returns Apple
fruits[1]; // returns Orange
fruits[2]; // returns Banana
fruits[3]; // returns undefined
for (var index in fruits) {
    console.log(fruits[index]);
}
console.log("-----------");
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
