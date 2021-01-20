# Class

[TOC]

## 1. Class là gì 

**Một Class thì gồm các phần như constructor, thuộc tính và phương thức.**

**Ví dụ** một class Employee trong Typescript

```typescript
class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
            this.empName = name;
            this.empCode = code;
    }

    getSalary() : number {
        return 10000;
    }
}
```

- Khi chương trình compile nó sẽ dịch ra Javascript như sau:

  ```js
  var Employee = (function () {
      function Employee(name, code) {
          this.empName = name;
          this.empCode = code;
      }
      Employee.prototype.getSalary = function () {
          return 10000;
      };
          return Employee;
  }());
  ```

## 2. Constructor là gì 

**Constructor là một hàm đặc biệt nó được gọi khi chúng ta tạo đối tượng. Constructor được khai báo bằng từ khoá constructor.**

```typescript
class Employee {

    empCode: number;
    empName: string;
    
    constructor(empcode: number, name: string ) {
        this.empCode = empcode;
        this.name = name;
    }
}
```

- Chúng ta có thể **viết code cho constructor hoặc không cần viết cũng được**. Cái này là option.

  ```typescript
  class Employee {
      empCode: number;
      empName: string;
  }
  ```

- Để tạo một đối tượng từ Class ta sử dụng toán tử new.

  ```typescript
  class Employee {
  
      empCode: number;
      empName: string;
      
      constructor(empcode: number, name: string ) {
              this.empCode = empcode;
              this.name = name;
      }
  }
  
  let emp = new Employee(100,"Steve");
  ```

## 3. Kế thừa là gì 

```typescript
class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    empCode: number;
    
    constructor(empcode: number, name:string) {
        super(name);
        this.empCode = empcode;
    }
    
    displayName():void {
        console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
    }
}

let emp = new Employee(100, "Bill");
emp.displayName(); // Name = Bill, Employee Code = 100
```

## 4. Cài đặt Interface 

**Chúng ta có thể implements một hoặc nhiều Interface cho Class.**

**Ví dụ** Class Employee sau đây.

```typescript
interface IPerson {
    name: string;
    display():void;
}

interface IEmployee {
    empCode: number;
}

class Employee implements IPerson, IEmployee {
    empCode: number;
    name: string;
    
    constructor(empcode: number, name:string) {
        this.empCode = empcode;
        this.name = name;
    }
    
    display(): void {
        console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
    }
}

let per:IPerson = new Employee(100, "Bill");
per.display(); // Name = Bill, Employee Code = 100

let emp:IEmployee = new Employee(100, "Bill");
emp.display(); //Compiler Error: Property 'display' does not exist on type 'IEmployee'
```

## 5. Overide Method Trong Class 

**Chúng ta có thể overide lại method của lớp cha giống như trong Java.**

```typescript
class Car {
    name: string;
        
    constructor(name: string) {
        this.name = name;
    }
    
    run(speed:number = 0) {
        console.log("A " + this.name + " is moving at " + speed + " mph!");
    }
}

class Mercedes extends Car {
    
    constructor(name: string) {
        super(name);
    }
    
    run(speed = 150) {
        console.log('A Mercedes started')
        super.run(speed);
    }
}

class Honda extends Car {
    
    constructor(name: string) {
        super(name);
    }
    
    run(speed = 100) {
        console.log('A Honda started')
        super.run(speed);
    }
}

let mercObj = new Mercedes("Mercedes-Benz GLA");
let hondaObj = new Honda("Honda City")

mercObj.run();  // A Mercedes started A Mercedes-Benz GLA is moving at 150 mph!
hondaObj.run(); // A Honda started A Honda City is moving at 100 mph!
```

## 6. Abstract Class 

**Typescript sử dụng từ khoá abstract để ta biến một class thành một abstract class.** 

 **Một abstract class có thể có một hoặc nhiều phương thức abstract hoặc biến.**

```typescript
abstract class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    display(): void{
        console.log(this.name);
    }

    abstract find(string): Person;
}

class Employee extends Person { 
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(name); // must call super()
        this.empCode = code;
    }

    find(name:string): Person { 
        // execute AJAX request to find an employee from a db
        return new Employee(name, 1);
    }
}

let emp: Person = new Employee("James", 100);
emp.display(); //James

let emp2: Person = emp.find('Steve');
```

Class mà extends một **abstract class phải bắt buộc sử dụng từ khoá super trong constructor của mình.**

## 7. Generic Class

```typescript
class KeyValuePair<T,U>
{ 
    private key: T;
    private val: U;

    setKeyValue(key: T, val: U): void { 
        this.key = key;
        this.val = val;
    }

    display():void { 
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "Steve");
kvp1.display(); //Output: Key = 1, Val = Steve 

let kvp2 = new KayValuePair<string, string>();
kvp2.SetKeyValue("CEO", "Bill"); 
kvp2.display(); //Output: Key = CEO, Val = Bill
```

