let str1: string = 'Hello Javascript';
let str2: string = 'TypeScript';

console.log(str1.replace('Java', 'Type'));
console.log(str1.replace('JavaScript', str2));
console.log(str1.replace(/Hello/gi, 'Hi'));
// Hello Typescript
// Hello Javascript
// Hi Javascript
