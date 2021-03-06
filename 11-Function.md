# function

[TOC]

## 1. Function là gì 

**Function là một khối lệnh trong đó có nhiều dòng lệnh.**

**Trong Typescript có 2 dạng function là name (tên) và anonymous (không tên).**

- Name Function

  ```typescript
  function display() {
      console.log("Hello TypeScript!");
  }
  
  display(); //Output: Hello TypeScript 
  ```

  Ta có thể truyền tham số và trả dữ liệu về trong function như sau:

  ```typescript
  function Sum(x: number, y: number) : number {
      return x + y;
  }
  
  Sum(2,3); // returns 5
  ```

- Anonymos Function

  Function không tên được chứa đựng trong biến.

  ```typescript
  let greeting = function() {
      console.log("Hello TypeScript!");
  };
  
  greeting(); //Output: Hello TypeScript! 
  ```

  Function không tên cũng có thể truyền tham số và kiểu trả về:

  ```typescript
  let Sum = function(x: number, y: number) : number
  {
      return x + y;
  }
  
  Sum(2,3); // returns 5
  ```

- Option Parameter

  **Tham số trong function có thể truyền vào hoặc không truyền vào cũng được. Để đánh dấu tham số có thể truyền vào hay không ta dùng dấu ?**

  ```typescript
  function Greet(greeting: string, name?: string ) : string {
      return greeting + ' ' + name + '!';
  }
  
  Greet('Hello','Steve');//OK, returns "Hello Steve!"
  Greet('Hi'); // OK, returns "Hi undefined!".
  Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.
  ```

- Tham số có giá trị mặc định

  Ta có thể tạo ra giá trị mặc định cho tham số, trong trường hợp giá trị của tham số không có, thì tham số sẽ lấy giá trị mặc định.

  ```typescript
  function Greet(name: string, greeting: string = "Hello") : string {
      return greeting + ' ' + name + '!';
  }
  
  Greet('Steve');//OK, returns "Hello Steve!"
  Greet('Steve', 'Hi'); // OK, returns "Hi Steve!".
  Greet('Bill'); //OK, returns "Hello Bill!"
  ```

## 2. Arrow Function là gì 

**Function Arrow được sử dụng cho anonymous function. Chúng có tên gọi khác trong các ngôn ngữ khác là lambda**

**Cú pháp**

> (param1, param2, ..., paramN) => expression

Chúng ta sử dụng arrow function => thì chúng ta không dùng từ khoá function nữa.

```typescript
let sum = (x: number, y: number): number => {
    return x + y;
}

sum(10, 20); //returns 30
```

Function Arrow ở trên khi biên dịch qua Javascript thì sẽ như sau:

```js
var sum = function (x, y) {
    return x + y;
}
```

**Arrow function không có tham số** truyền vào được viết như sau:

```typescript
let Print = () => console.log("Hello TypeScript");

Print(); //Output: Hello TypeScript
```

Chúng ta có thể **sử dụng arrow function trong class** như sau:

```typescript
lass Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    display = () => console.log(this.empCode +' ' + this.empName)
}
let emp = new Employee(1, 'Ram');
emp.display();
```

## 3. Tham số Rest

**Một function có thể có 1 hoặc nhiều tham số.**

Sẽ có những trường hợp ta không biết được sẽ truyền bao nhiêu tham số trong function. Để giải quyết vấn đề này TypeScript cung cấp cho chung ta tham số Rest với khai báo là 3 dấu … trong function.

**Ví dụ**

```typescript
function Greet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}

Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"

Greet("Hello");// returns "Hello !"
```

Ta có thể truyền 1 hoặc nhiều tham số cho biến …names.

**Ta cũng có thể dùng rest cho arrow function như sau.**

```typescript
let Greet = (greeting: string, ...names: string[]) => {
    return greeting + " " + names.join(", ") + "!";
}

Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"

Greet("Hello");// returns "Hello !"
```

- Như 2 ví dụ trên ta đặt … ở cuối function mới hợp lệ, nếu ta đặt … ở đầu sẽ báo lỗi.

```typescript
function Greet(...names: string[], greeting: string) {  // Compiler Error
    return greeting + " " + names.join(", ") + "!";
}
```