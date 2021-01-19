// Kế thừa Interface
// có thể kế thừa một hoặc nhiều interface để sử dụng lại.
interface IPerson {
    name: string;
    gender: string;
}

interface IEmployee extends IPerson {
    empCode: number;
}

let empObj:IEmployee = {
    empCode:1,
    name:"Bill",
    gender:"Male"
};






