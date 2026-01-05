// if 条件判断
if (isActive) {
    console.log("The system is active.");
} else {
    console.log("The system is inactive.");
}

var num1 = 10;
var num2 = 20;
// 比较两个数值 
// '=='为相等， '==='为全等(值和类型都相等)
if (num1 == num2) {
    console.log("num1 is equal to num2.");
} else if (num1 < num2) {
    console.log("num1 is less than num2.");
} else {
    console.log("num1 is greater than num2.");
}   

// switch 语句
var day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}