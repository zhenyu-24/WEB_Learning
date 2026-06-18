/* TypeScript 元组
我们知道数组中元素的数据类型都一般是相同的（any[] 类型的数组可以不同），如果存储的元素数据类型不同，则需要使用元组。

TypeScript 中的元组（Tuple）是一种特殊类型的数组，它允许在数组中存储不同类型的元素，与普通数组不同，元组中的每个元素都有明确的类型和位置。元组可以在很多场景下用于表示固定长度、且各元素类型已知的数据结构。

创建元组的语法格式如下：

let tuple: [类型1, 类型2, 类型3, ...];
实例
声明一个元组并初始化：

let mytuple: [number, string];
mytuple = [42,"Runoob"];
在上面的例子中，mytuple 是一个元组，它包含一个 number 类型和一个 string 类型的元素。

访问元组
元组中元素使用索引来访问，第一个元素的索引值为 0，第二个为 1，以此类推第 n 个为 n-1，语法格式如下:

tuple_name[index]
*/ 

let mytuple: [number, string, boolean] = [42, "Runoob", true];
 
// 访问元组中的元素
let num = mytuple[0]; // 访问第一个元素，值为 42，类型为 number
let str = mytuple[1]; // 访问第二个元素，值为 "Runoob"，类型为 string
let bool = mytuple[2]; // 访问第三个元素，值为 true，类型为 boolean
 
console.log(num);  // 输出: 42
console.log(str);  // 输出: Runoob
console.log(bool); // 输出: true

/*元组运算
我们可以使用以下两个函数向元组添加新元素或者删除元素：

push() 向元组添加元素，添加在最后面。

pop() 从元组中移除元素（最后一个），并返回移除的元素。
*/ 

var tuple = [42, "Hello"];
// 添加符合类型的元素
tuple.push("World"); // 合法，因为元组定义了可选的 string 类型
console.log(tuple); // 输出: [42, "Hello", "World"]


/*
连接元组
元组可以使用数组的 concat 方法进行连接，但需要注意连接后的结果是一个普通的数组，而不是元组。

实例
let tuple1: [number, string] = [42, "Hello"];
let tuple2: [boolean, number] = [true, 100];

let result = tuple1.concat(tuple2); // 结果是一个数组: [42, "Hello", true, 100]
console.log(result); // 输出: [42, "Hello", true, 100]
切片元组
你可以使用数组的 slice 方法对元组进行切片操作，返回一个新的数组。

实例
let tuple: [number, string, boolean] = [42, "Hello", true];

let sliced = tuple.slice(1); // 从索引 1 开始切片
console.log(sliced); // 输出: ["Hello", true]
遍历元组
你可以使用 for...of 循环或者 forEach 方法遍历元组中的元素。

实例
let tuple: [number, string, boolean] = [42, "Hello", true];

// 使用 for...of 循环
for (let item of tuple) {
    console.log(item);
}

// 使用 forEach 方法
tuple.forEach(item => console.log(item));
转换为普通数组
虽然元组是一个固定长度、固定类型的数组，但可以通过 Array.prototype 的方法将其转换为普通数组进行进一步处理。

实例
let tuple: [number, string, boolean] = [42, "Hello", true];

// 转换为数组并使用数组方法
let array = Array.from(tuple);
array.push("New Element");

console.log(array); // 输出: [42, "Hello", true, "New Element"]
*/ 