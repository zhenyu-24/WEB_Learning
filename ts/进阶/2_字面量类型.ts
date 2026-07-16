// 定义字符串字面量类型
// direction 只能是四个特定值之一
var direction: "up" | "down" | "left" | "right";

// 正确：赋值为字面量类型中的值
direction = "up";

// 错误：赋值不在列表中的值
// direction = "upup"; // 编译错误！

console.log("方向: " + direction);

// 使用类型别名创建可复用的字面量类型
// 定义状态类型：只能是三个固定值之一
type Status = "pending" | "active" | "completed";

// 使用类型别名
var currentStatus: Status = "active";
console.log("状态: " + currentStatus);

// 定义数字字面量类型
// code 只能是三个特定值之一
var code: 200 | 404 | 500;

// 正确：赋值 200
code = 200;

// 错误：赋值不在列表中的值
// code = 301; // 编译错误！

console.log("状态码: " + code);

// 使用数字字面量模拟枚举
// 定义一周的天数
type Weekday = 1 | 2 | 3 | 4 | 5 | 6 | 7;

// 只能赋值 1-7 之间的数字
var today: Weekday = 1;
console.log("今天是星期: " + today);

// 定义对象字面量类型
// 指定对象的结构和属性类型
type Point = {
    // 点的 x 坐标
    x: number;
    // 点的 y 坐标
    y: number;
};

// 使用对象字面量类型
var p: Point = { x: 10, y: 20 };
console.log("点: " + JSON.stringify(p));

// 定义只读对象类型
// 使用 readonly 修饰符将属性设为只读
type ReadonlyPoint = {
    // 只读的 x 坐标
    readonly x: number;
    // 只读的 y 坐标
    readonly y: number;
};

// 使用只读对象类型
var rp: ReadonlyPoint = { x: 1, y: 2 };

// 尝试修改只读属性会报错
// rp.x = 3; // 编译错误：只读属性不能修改

console.log("只读点: " + JSON.stringify(rp));