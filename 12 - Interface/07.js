var kv1 = { key: 1, value: "Steve" };
var kv2 = { key: 1, value: 12345 };
console.log(kv1);
console.log(kv2);
function processNumKeyPairs(key, value) {
    console.log('processNumKeyPairs: key = ' + key + ', value = ' + value);
}
function processStringKeyPairs(key, value) {
    console.log('processStringKeyPairs: key = ' + key + ', value = ' + value);
}
var numKVProcessor = processNumKeyPairs;
numKVProcessor(1, 12345); //Output: processNumKeyPairs: key = 1, value = 12345
var strKVProcessor = processStringKeyPairs;
strKVProcessor(1, "Bill"); //Output: processStringKeyPairs: key = 1, value = Bill
