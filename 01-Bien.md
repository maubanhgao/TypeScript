# biến

[TOC]

## 1. Biến là gì 

TypeScript tuân thủ cách đặt biến giống như JavaScript. Biến có thể được khai báo bởi các từ khoá như **var, let và const.**

Từ khoá var trong Typescript có chức năng và phạm vi giống như Javascript.

Từ khoá let được giới thiệu trong phiên bản mới nhất của JS (ES6). Trong phiên bản mới ES6 giới thiệu 2 từ khoá mới là let và const để khắc phục những bất cập trong khai báo biến với var.

**Ví dụ khai báo biến với từ khoá let**

```typescript
let employeeName = "John";
// or 
let employeeName:string = "John";
```

Từ khoá let được khai báo giống như cú pháp của var. Nhưng không giống như từ khoá var, khi ta khai báo let thì **phạm vi truy cập của nó chỉ ở trong một khối lệnh**.

**Ví dụ**

```typescript
let num1:number = 1; 
    
function letDeclaration() { 
    let num2:number = 2; 

    if (num2 > num1) { 
        let num3: number = 3;
        num3++; 
    } 

    while(num1 < num2) { 
        let num4: number = 4;
        num1++;
    }

    console.log(num1); //OK
    console.log(num2); //OK 
    console.log(num3); //Compiler Error: Cannot find name 'num3'
    console.log(num4); //Compiler Error: Cannot find name 'num4'
}

letDeclaration();
```

Như ta thấy dòng lệnh console.log(num3); sẽ bị lỗi vì num3 phạm vi của nó chỉ hoặt động trong khối lệnh if mà thôi.

Cũng giống như console.log(num4). Giá trị num4 chỉ có tác dụng trong khối lệnh while mà thôi. Ra ngoài khối lệnh while thì không còn tác dụng

## 2. Lợi thế của let hơn var là gì 

- **Các biến let phải được khai báo trước khi sử dụng**, còn var ta có thể sử dụng trước và khai báo sau (hositing).

  **Trong ví dụ sau typescript sẽ thông báo lỗi nếu chúng ta sử dụng biến num1 mà không khai báo. Còn Javascript thì vẫn cho phép.**

  ```typescript
  onsole.log(num1); // Compiler Error: error TS2448: Block-scoped variable 'num' used before its declaration
  let num1:number = 10 ;
  
  console.log(num2); // OK, Output: undefined 
  var num2:number = 10 ;
  ```

- **Biến Let không cho phép khai báo lại giá trị còn var thì cho phép.**

  ```typescript
  var num:number = 1; // OK
  var Num:number = 2;// OK
  var NUM:number = 3;// OK
  var NuM:number = 4;// OK
  
  let num:number = 5;// Compiler Error: Cannot redeclared block-scoped variable 'num'
  let Num:number = 6;// Compiler Error: Cannot redeclared block-scoped variable 'Num'
  let NUM:number = 7;// Compiler Error: Cannot redeclared block-scoped variable 'NUM'
  let NuM:number = 8;// Compiler Error: Cannot redeclared block-scoped variable 'NuM'
  ```

  **Chúng ta sử dụng let hơn là var** vì nó giúp ta hạn chế được những lỗi khi chương trình đang chạy. Nó giúp chúng ta viết code chặt chẽ hơn, dễ đọc và bảo trì code hơn.

## 3. Sử dụng Const 

**Biến const thì được khai báo giống như let và var về cú pháp. Điểm khác biệt của const là giá trị của biến const là không thay đổi được, nó là một hằng số.**

```typescript
const num:number = 100; num = 200; //Compiler Error: Cannot assign to 'num' because it is a constant or read-only property 
```

**Biến sử dụng const phải khởi tạo giá trị ngay từ lúc ban đầu.**

```typescript
const num:number; //Compiler Error: const declaration must be initialized
num = 100;
```

Chúng ta có thể sử dụng **const để thay đổi các thuộc tính bên trong của đối tượng, nhưng không thay đổi được cấu trúc của đổi tượng.**

```typescript
const playerCodes = { 
    player1 : 9, 
    player2 : 10, 
    player3 : 13, 
    player4 : 20
}; 
playerCodes.player2 = 11; // OK

playerCodes = {     //Compiler Error: Cannot assign to playerCodes because it is a constant or read-only
    player1 : 50,   // Modified value
    player2 : 10, 
    player3 : 13, 
    player4 : 20
}; 
```

## 4. Data Mofifier

**Trong TypeScript chúng ta có 3 loại access modifier là public, private và protected.**

- Khi một biến hay một phương thức khai báo public thì nó sẽ được truy cập ở bất kỳ đâu.

  ```typescript
  class Employee {
      public empCode: string;
      empName: string;
  }
  
  let emp = new Employee();
  emp.empCode = 123;
  emp.empName = "Swati";
  ```

- Khi một biến hay một phương thức khai báo private thì nó sẽ được access chỉ trong Class đó và không được truy cập từ bên ngoài.

  ```typescript
  class Employee {
      private empCode: number;
      empName: string;
  }
  
  let emp = new Employee();
  emp.empCode = 123; // Compiler Error
  emp.empName = "Swati";//OK
  ```

- Khi một biến hay một phương thức khai báo protected thì nó sẽ được truy cập thông qua kế thừa cha và con.

  ```typescript
  class Employee {
      public empName: string;
      protected empCode: number;
  
      constructor(name: string, code: number){
          this.empName = name;
          this.empCode = code;
      }
  }
  
  class SalesEmployee extends Employee{
      private department: string;
      
      constructor(name: string, code: number, department: string) {
          super(name, code);
          this.department = department;
      }
  }
  
  let emp = new SalesEmployee("John Smith", 123, "Sales");
  empObj.empCode; //Compiler Error
  ```

  