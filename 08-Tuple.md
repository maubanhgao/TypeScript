# Tuple

[TOC]

## 1. Tuple là gì 

**Chúng ta sử dụng Tuple để chứa 2 hoăc nhiều giá trị có kiểu dữ liệu khác nhau**

```typescript
var empId: number = 1;
var empName: string = "Steve";        

// Tuple type variable 
var employee: [number, string] = [1, "Steve"];
```

## 2. Tuple chứa nhiều giá trị 

```typescript
var employee: [number, string] = [1, "Steve"];
var person: [number, string, boolean] = [1, "Steve", true];

var user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable
```

## 3. Tuple Array 

**một mảng Tuple**

```typescript
var employee: [number, string][];

employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
```

**Chúng ta truy cập mảng Tuple như sau:**

```typescript
var employee: [number, string] = [1, "Steve"];
employee[0]; // returns 1
employee[1]; // returns "Steve"
```

## 4. Thêm phần tử vào Tuple 

**push để thêm phần tử cho Tuple.**

```typescript
var employee: [number, string] = [1, "Steve"];
employee.push(2, "Bill"); 
console.log(employee); //Output: [1, 'Steve', 2, 'Bill']
```

## 5. Các phương thức hỗ trợ trong Tuple

**Tuple cũng giống như Array, chúng ta có thể sử dụng các method có sẵn trong Array cho Tuple như pop, push, concat etc.**

```typescript
var employee: [number, string] = [1, "Steve"];

// retrieving value by index and performing an operation 
employee[1] = employee[1].concat(" Jobs"); 
console.log(employee); //Output: [1, 'Steve Jobs']
```

