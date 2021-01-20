# Union Any Void Never any void never

[TOC]

## 1. Union là gì 

**Cho phép chúng ta sử dụng nhiều kiểu dữ liệu cho một biến.**

```typescript
let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
code = false; // Compiler Error

let empId: string | number;
empId = 111; // OK
empId = "E111"; // OK
empId = true; // Compiler Error
```



```typescript
function displayType(code: (string | number))
{
    if(typeof(code) === "number")
        console.log('Code is number.')
    else if(typeof(code) === "string")
        console.log('Code is string.')
}

displayType(123); // Output: Code is number.
displayType("ABC"); // Output: Code is string.
displayType(true); //Compiler Error: Argument of type 'true' is not assignable to a parameter of type string | number
```

## 2. Any là gì 

**Any sử dụng khi ta không biết kiểu dữ liệu là gì.**

Thường được sử dụng khi chúng ta gọi một webservice bên ngoài hoặc dịch vụ của nhà phát triển thứ 3.

```typescript
let something: any = "Hello World!"; 
something = 23;
something = true;
```

**Đoạn code trên sẽ được dịch ra Javascript như sau khi compile.**

```typescript
var something = "Hello World!";
something = 23;
something = true;
```

Chúng ta có thể tạo mảng với any như sau:

```typescript
let arr: any[] = ["John", 212, true]; 
arr.push("Smith"); 
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ] 
```

## 3. Void là gì 

**void được sử dụng để thông báo function không trả về kiểu dữ liệu gì.**

```typescript
function sayHi(): void { 
    console.log('Hi!')
} 

let speech: void = sayHi(); 
console.log(speech); //Output: undefined
```

## 4. Never là gì

**TypeScript có một kiểu dữ liệu mới là never có nghĩa <u>*giá trị đó sẽ không xảy ra*</u>.**

**Nerver được sử dụng khi ta chắc chắn việc gì đó không xảy ra.**

**Ví dụ** sau chúng ta viết function nó sẽ không bao giờ trả về lỗi vì while luôn true nên vòng lặp while chạy vô hạn không bao giờ bị lỗi.

```typescript
function throwError(errorMsg: string): never { 
            throw new Error(errorMsg); 
} 

function keepProcessing(): never { 
            while (true) { 
         console.log('I always does something and never ends.')
     }
}
```

