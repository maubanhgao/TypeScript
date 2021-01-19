// Interface định nghĩa cấu trúc cho Array
interface NumLists {
    [index: number]:number
    //[1, 2, 3]
}
let numArr: NumLists = [1, 2, 3];
console.log(numArr[0]); // 1
console.log("-----------------");

interface IStringList {
    [index:string]:string
}

// let strArr : IStringList; ERROR
let strArr = {} as IStringList;
strArr['js'] = 'hong';
var foo = strArr['js'];
console.log(foo); // hong



