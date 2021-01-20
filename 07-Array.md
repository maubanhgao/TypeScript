# Array

[TOC]

## 1. Array là gì 

**Array để chứa nhiều giá trị.**

```typescript
let fruits: Array<string>;
fruits = ['Apple', 'Orange', 'Banana']; 

let ids: Array<number>;
ids = [23, 34, 100, 124, 44]; 
```

**Array có thể chứa đựng các phần tử khác kiểu dữ liệu.**

```typescript
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
// or 
let values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
```

## 2. Truy cập các phần tử trong Array 

**Chúng ta sử dụng Index (vị trí) để truy cập các phần tử trong Array.**

```typescript
let fruits: string[] = ['Apple', 'Orange', 'Banana']; 
fruits[0]; // returns Apple
fruits[1]; // returns Orange
fruits[2]; // returns Banana
fruits[3]; // returns undefined
```

## 3. Duyệt các phần tử trong Array 

```typescript
let fruits: string[] = ['Apple', 'Orange', 'Banana']; 

for(var index in fruits)
{ 
    console.log(fruits[index]);  // output: Apple Orange Banana
}

for(var i = 0; i < fruits.length; i++)
{ 
    console.log(fruits[i]); // output: Apple Orange Banana
}
```

## 4. Các phương thức hỗ trợ trong Array

**Array có sẵn các phương thức giúp chúng ta lấy các phần tử, thêm các phần tử, filter, sort các phần tử vv trong mảng.**

```typescript
var fruits: Array<string> = ['Apple', 'Orange', 'Banana']; 
fruits.sort(); 
console.log(fruits); //output: [ 'Apple', 'Banana', 'Orange' ]

console.log(fruits.pop()); //output: Orange

fruits.push('Papaya'); 
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya']

fruits = fruits.concat(['Fig', 'Mango']); 
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango'] 

console.log(fruits.indexOf('Papaya'));//output: 2
```

