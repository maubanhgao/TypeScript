var fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
fruits.sort();
console.log(fruits);
// [ 'Apple', 'Banana', 'Orange' ]

fruits.pop();
console.log(fruits);//[ 'Apple', 'Banana' ]

fruits.push('Papaya');
console.log(fruits); //[ 'Apple', 'Banana', 'Papaya' ]

fruits = fruits.concat(['Fig', 'Mango']);
console.log(fruits); //[ 'Apple', 'Banana', 'Papaya', 'Fig', 'Mango' ]

console.log(fruits.indexOf(('Papaya'))); //2