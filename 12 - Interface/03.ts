// Tham số tuỳ chọn
// Trong interface chúng ta có thể cho phép một số thuộc tính hoặc phương thức có thể được có hoặc không có trong class sử dụng nó. Bằng cách sử dụng dấu ? như sau:

interface IEmployee {
    empCode: number,
    empName: string,
    empDept ? : string; // co / khong
}

let empObj1:IEmployee = {
    empCode: 1,
    empName: "Steve"
};
let empobj2:IEmployee = {
    empName: "Bill",
    empCode: 1,
    empDept: "IT",
};

console.log(empObj1);
console.log(empobj2);
// { empCode: 1, empName: 'Steve' }
// { empName: 'Bill', empCode: 1, empDept: 'IT' }

