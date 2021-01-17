# vòng lặp

[TOC]

## 1. Vòng lặp for 

Typescript hỗ trợ cho chúng ta **3 loại vòng lặp** for là forloop, for of loop và for in loop.

**&&Vòng lặp for Loop**

**Cú pháp**

```typescript
for (first expression; second expression; third expression ) {
    // statements to be executed repeatedly
}
```

**Ví dụ**

```typescript
for (let i = 0; i < 3; i++) {
  console.log ("Block statement execution no." + i);
}
```

**&&Vòng lặp for of Loop**

Dùng để trả lại từng phần tử của tập hợp. Nó tiện hơn vòng lặp for. Vì vòng lặp for trả về index, dựa vào index ta mới lấy được phần tử.

**Ví dụ**

```typescript
let arr = [10, 20, 30, 40];

for (var val of arr) {
  console.log(val); // prints values: 10, 20, 30, 40
}
```

**&&Vòng lặp for in Loop**

Duyệt qua các phần tử của mảng và t**rả về vị trí index** của các phần tử trong mảng.

```typescript
let arr = [10, 20, 30, 40];

for (var index in arr) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(arr[index]); // prints elements: 10, 20, 30, 40
}
```

## 2. Vòng lặp While 

**Nó cũng tương tự nguyên lý vòng lặp while bên Javascript. Kiểm tra điều kiện trước khi chạy các dòng code trong while.**

**Cú pháp**

> **while** (condition expression) { 
>
> ​	// code block to be executed 
>
> }

**Ví dụ**

```typescript
let i: number = 2;

while (i < 4) {
    console.log( "Block statement execution no." + i )
    i++;
}
```

## 3. Vòng lặp doWhile

**Cú pháp**

> **do** { 
>
> ​	// code block to be executed 
>
> } **while** (condition expression);

**Ví dụ**

```typescript
let i: number = 2;
do {
    console.log("Block statement execution no." + i )
    i++;
} while ( i < 4)
```

