// Generic trong Interface
// Chúng ta cũng có thể tạo một Interface có kiểu Generic trong TypeScript như sau:
interface KeyPair<T, U> {
    key: T,
    value: U
}
let kv1 : KeyPair<number, string>   =  { key:1, value:"Steve" };
let kv2 : KeyPair<number, number> = { key:1, value:12345 };

console.log(kv1);
console.log(kv2);
// { key: 1, value: 'Steve' }
// { key: 1, value: 12345 }

// Chúng ta có thể sử dụng trong function
interface KeyValueProcessor<T, U>
{
    (key: T, val: U): void;
}
function processNumKeyPairs(key:number, value:number):void {
    console.log('processNumKeyPairs: key = ' + key + ', value = ' + value)
}
function processStringKeyPairs(key: number, value:string):void {
    console.log('processStringKeyPairs: key = '+ key + ', value = ' + value)
}
let numKVProcessor: KeyValueProcessor<number, number> = processNumKeyPairs;
numKVProcessor(1, 12345); //Output: processNumKeyPairs: key = 1, value = 12345

let strKVProcessor: KeyValueProcessor<number, string> = processStringKeyPairs;
strKVProcessor(1, "Bill"); //Output: processStringKeyPairs: key = 1, value = Bill


