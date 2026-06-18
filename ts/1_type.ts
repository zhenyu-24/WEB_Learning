/*
类型	描述	示例
string	表示文本数据	let name: string = "Alice";
number	表示数字，包括整数和浮点数	let age: number = 30;
boolean	表示布尔值 true 或 false	let isDone: boolean = true;
array	表示相同类型的元素数组	let list: number[] = [1, 2, 3];
tuple	表示已知类型和长度的数组	let person: [string, number] = ["Alice", 30];
enum	定义一组命名常量	enum Color { Red, Green, Blue };
any	任意类型，不进行类型检查	let value: any = 42;
void	无返回值（常用于函数）	function log(): void {}
null	表示空值	let empty: null = null;
undefined	表示未定义	let undef: undefined = undefined;
never	表示不会有返回值	function error(): never { throw new Error("error"); }
object	表示非原始类型	let obj: object = { name: "Alice" };
union	联合类型，表示可以是多种类型之一	`let id: string
unknown	不确定类型，需类型检查后再使用	let value: unknown = "Hello";
*/ 

// 字符串
let username: string = "Alice";
let greeting: string = `Hello, ${username}! Welcome to TypeScript.`;
console.log(greeting); // 输出：Hello, Alice! Welcome to TypeScript.

// 数字
let age: number = 30;
let message: string = `Your age is ${age}.`;
console.log(message); // 输出：Your age is 30.

// 布尔值
let isDone: boolean = true;
console.log(isDone); // 输出：true

// 数组
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
console.log(numbers); // 输出：[1, 2, 3]
console.log(names); // 输出：["Alice", "Bob"]

// 元组
let person: [string, number] = ["Alice", 30];
console.log(person); // 输出：["Alice", 30]

// 枚举
enum Color { Red, Green, Blue };
let color: Color = Color.Green;
console.log(color); // 输出：1

// 任意类型
let value: any = 42;
console.log(value); // 输出：42

