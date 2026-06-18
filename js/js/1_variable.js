/* 
在 JavaScript 中，可以使用 var、let 和 const 关键字来声明变量。

var：ES5 引入的变量声明方式，具有函数作用域。

let：ES6 引入的变量声明方式，具有块级作用域。只在 {} 内有效，尽量使用let而不是var。

const：ES6 引入的常量声明方式，具有块级作用域，且值不可变。
 */

// 数值变量
var num = 42;

// 字符串变量
var message = "Hello, World2!";

// 布尔变量
var isActive = true;

// 输出变量到控制台
console.log(num);
console.log(message);
console.log(isActive);

// 复合类型
var person = {
    name: "Alice",
    age: 30,
    isEmployed: true
};
console.log(person);

// 空值和未定义
var hello = null;
var world = undefined;
// typeof 输出变量类型
console.log(typeof num);

// 数组
var colors = ["red", "green", "blue"];
console.log(colors);
