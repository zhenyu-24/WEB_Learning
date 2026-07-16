/*
为什么需要 type 别名
当代码中多次使用同一个复杂类型时，每次都写完整类型会很冗长。

type 别名可以为复杂类型定义一个简洁的名字，让代码更易读、更易维护。

特别是在使用联合类型、函数类型、元组等复杂类型时，type 别名非常有用。

概念说明：type 别名使用 type 关键字定义，它只是为现有类型起了一个新名字，不会创建新的类型。

基本用法
使用 type 关键字为类型定义别名。
*/ 

// 使用 type 别名定义对象类型
// type 可以定义任何类型，不仅仅是对象
type PersonType = {
    name: string;
    age: number;
};

// 使用接口定义对象类型
// 接口可以声明合并，可以被类实现
interface PersonInterface {
    name: string;
    age: number;
}

// 两者都可以用来声明变量类型
var person1: PersonType = { name: "Alice", age: 25 };
var person2: PersonInterface = { name: "Bob", age: 30 };

console.log("PersonType: " + JSON.stringify(person1));
console.log("PersonInterface: " + JSON.stringify(person2));