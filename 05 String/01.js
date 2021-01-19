var str = 'Hello TypeScript';
str.charAt(2); //return l
console.log(str.charAt(0));
console.log(str.charAt(2));
console.log("Hello World".charAt(2));
// H
// l
// l
var str1 = 'Hello';
var str2 = 'TypeScript';
console.log(str1.concat(str2));
console.log(str1.concat(' ', str2));
console.log(str1.concat(' Mr. ', 'Bond'));
// HelloTypeScript
// Hello TypeScript
// Hello Mr. Bond
var str4 = 'TypeTScripteeet  Teet';
console.log(str4.indexOf('T'));
console.log(str4.indexOf('p'));
console.log((str4.indexOf('e')));
console.log(str4.indexOf('T', 1));
console.log(str4.indexOf('t', 1));
