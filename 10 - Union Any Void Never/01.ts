//Union Cho phép chúng ta sử dụng nhiều kiểu dữ liệu cho một biến.
let code: (string | number);
code = 123;
code = "ABC";

function displayType(code: (string | number)) {
    if(typeof code === "number"){
        console.log("Code is number");
    }
    else if(typeof (code) === "string")
        console.log("Code is string");
}
displayType(123); //Code is number
displayType("ABC"); // Code is string

// Any sử dụng khi ta không biết kiểu dữ liệu là gì.
// Thường được sử dụng khi chúng ta gọi một webservice bên ngoài hoặc dịch vụ của nhà phát triển thứ 3.
let something: any = "Hello World";
something = 12;
something = true;
console.log(something); // true gia tri luu cuoi

//Chúng ta có thể tạo mảng với any như sau:
let arr: any[] = ["John", 212, true];
arr.push("Smith");
console.log(arr);
// [ 'John', 212, true, 'Smith' ]

// void được sử dụng để thông báo function không trả về kiểu dữ liệu gì.

function sauHi(): void {
    console.log("Hi");
}
let speech: void = sauHi(); // Hi
console.log(speech); // undefined

// TypeScript có một kiểu dữ liệu mới là never có nghĩa giá trị đó sẽ không xảy ra.
// Nerver được sử dụng khi ta chắc chắn việc gì đó không xảy ra


// Ví dụ sau chúng ta viết function nó sẽ không bao giờ trả về lỗi vì while luôn true nên vòng lặp while chạy vô hạn không bao giờ bị lỗi.
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}
function keepProcessing(): never {
    while (true){
        console.log("I always does something and never ends.");
    }
}
