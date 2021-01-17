

# Mệnh đề điều kiện

[TOC]

## 1. Câu điều kiện tử if-else 

**Cũng tương tự như Javascript. Câu lệnh if else trong Typescript cũng giống như cú pháp và cách sử dụng trong JS.**

```typescript
let x: number = 10, y = 20;

if (x > y) 
{
    console.log('x is greater than y.');
} 
else if (x < y)
{
    console.log('x is less than y.'); //This will be executed
}
else if (x == y) 
{
    console.log('x is equal to y');
}
```

- Câu điều kiện tam phân.

  ```js
  let x: number = 10, y = 20;
  
  x > y? console.log('x is greater than y.'): console.log('x is less than or equal to y.')
  ```

## 2. Câu điều kiện tử switch 

**Trong Typescript cũng tương tự cách dùng switch như trong Javascrip hay Java.**

```typescript
let day : number = 4;

switch (day) {
    case 0:
        console.log("It is a Sunday.");
        break;
    case 1:
        console.log("It is a Monday.");
        break;
    case 2:
        console.log("It is a Tuesday.");
        break;
    case 3:
        console.log("It is a Wednesday.");
        break;
    case 4:
        console.log("It is a Thursday.");
        break;
    case 5:
        console.log("It is a Friday.");
        break;
    case 6:
        console.log("It is a Saturday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}
```

- Trong Typescript chúng ta cũng có thể sử dụng expression trong điều kiện như sau:

```typescript
let x = 10, y = 5;

switch (x-y) {
    case 0:
        console.log("Result: 0");
        break;
    case 5:
        console.log("Result: 5");
        break;
    case 10:
        console.log("Result: 10");
        break;
}
```

