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

