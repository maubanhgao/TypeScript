# toán tử

[TOC]

## 1. Toán tử là gì 

Trong Typescript cũng hỗ trợ các phép tính **toán học, so sánh, logic, phép gán, bitwise và điều kiện** giúp cho chúng ta thực hiện các tính toán và so sánh.

## 2. Toán tử số số học 

**Thực hiện các phép tính cộng, trừ, nhân, chia, mod.**

```typescript
var x = 5, y = 10, z = 15;

x + y; //returns 15

y - x; //returns 5

x * y; //returns 50

y / x; //returns 2

x % 2; //returns 1

x++; //returns 6

x--; //returns 4
```

## 3. Toán gán 

```typescript
var x = 5, y = 10, z = 15;

x = y; //x would be 10

x += 1; //x would be 6

x -= 1; //x would be 4

x \*= 5; //x would be 25

x /= 5; //x would be 1

x %= 2; //x would be 1
```

## 4. Toán tử so sánh 

```typescript
var a = 5, b = 10, c = "5";
var x = a;

a == c; // returns true

a === c; // returns false

a == x; // returns true

a != b; // returns true

a > b; // returns false

a < b; // returns true

a >= b; // returns false

a <= b; // returns true

a >= c; // returns true

a <= c; // returns true		
```

## 5. Toán tử logic

```typescript
var a = 5, b = 10;

(a != b) && (a < b); // returns true

(a > b) || (a == b); // returns false

(a < b) || (a == b); // returns true

!(a < b); // returns false

!(a > b); // returns true
```

## 6. Toán tử tam phân 

```js
var a = 10, b = 5;

var c = a > b? a : b; // value of c would be 10
var d = a > b? b : a; // value of d would be 5
```

## 7. Toán tử type

- Toán tử **in**

  ```typescript
  let Bike = {make: 'Honda', model: 'CLIQ', year: 2018};
  console.log('make' in Bike);   // true
  ```

  **kết quả :** true

- Toán tử **delete**

  ```typescript
  let Bike = { Company1: 'Honda',
               Company2: 'Hero',
               Company3: 'Royal Enfield'
             };
  delete Bike.Company1;
  console.log(Bike);  
  ```

  **kết quả :** { Company2: ‘Hero’, Company3: ‘Royal Enfield’ }

- Toán tử **typeof**

  ```typescript
  let message = "Welcome to " + "JavaTpoint";
  console.log(typeof message); 
  ```

  **kết quả : String**

- Toán tử **instanceof**

  ```typescript
  let arr = [1, 2, 3];
  console.log( arr instanceof Array ); // true
  console.log( arr instanceof String ); // false 
  ```

  