// Tham số chỉ được phép đọc
// Trong Interface sẽ có những thuộc tính mà ta chỉ cho phép class dùng nó được đọc mà không được thay đổi giá trị. Ta sử dụng từ khoá readonly như sau:

interface Citizen {
    name: string;
    readonly SSN: number;
}
let personObj : Citizen = {SSN: 110555444, name: 'James Bond'};
personObj.name = 'Steve Smith'; // OK
// personObj.SSN = '333666888'; // Compiler Error


