/*
可选链（Optional Chaining）是 TypeScript 和 JavaScript 中一种安全的属性访问方式。

它允许开发者以链式调用的方式安全地访问嵌套对象属性。当访问路径中的任意一个属性为 null 或 undefined 时，整个表达式会短路返回 undefined，而不会抛出错误。

这极大地简化了深层嵌套对象的属性访问代码。
*/ 

// 定义一个嵌套的用户对象
// 包含姓名和地址信息，地址中有城市
var user = {
    name: "RUNOOB",
    address: {
        city: "Beijing"
    }
};

// 传统方式：使用 && 逐层检查
// 这种方式代码冗长，容易遗漏
var city1 = user && user.address && user.address.city;

// 可选链方式：使用 ?. 运算符
// 如果任意一层为 null 或 undefined，直接返回 undefined
var city2 = user?.address?.city;

console.log("传统方式: " + city1);
console.log("可选链: " + city2);