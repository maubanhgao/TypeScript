let str1: string = 'Apple, Banana, Orange';
let str2: string = ',';
console.log(str1.split(str2));
console.log(str1.split(','));
console.log(str1.split(',', 2));
console.log(str1.split(',', 1));

let str: string = 'Hello Typescript';
console.log(str.toUpperCase());
console.log('hello typescript'.toUpperCase());
// [ 'Apple', ' Banana', ' Orange' ]
//     [ 'Apple', ' Banana', ' Orange' ]
//     [ 'Apple', ' Banana' ]
//     [ 'Apple' ]
// HELLO TYPESCRIPT
// HELLO TYPESCRIPT
