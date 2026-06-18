/* 
TypeScript 枚举（Enum）
枚举（Enum）是 TypeScript 中非常有用的特性，它允许我们定义一组命名常量。枚举可以使得代码更易读、更易维护，可以用有意义的名称替代"魔术数字"。
*/ 
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

var dir: Direction = Direction.Up;
console.log("方向: " + dir);
console.log("方向名称: " + Direction[0]);

/* 
interface：
Interface（接口） 是 TypeScript 中最核心的特性之一，用于定义代码的契约（Contract），规定了对象、函数、类等的形状（Shape）。

一、Interface 的核心作用
1. 定义对象的形状（Shape）
typescript
// 定义用户对象必须有的属性和类型
interface User {
    id: number;
    name: string;
    email: string;
    age?: number;  // 可选属性
}

// 必须完全符合接口定义
const user1: User = {
    id: 1,
    name: '张三',
    email: 'zhangsan@email.com'
    // age 是可选的，可以有也可以没有
};

// ❌ 错误：缺少 id
const user2: User = {
    name: '李四',
    email: 'lisi@email.com'
};
// 报错：Property 'id' is missing
2. 定义函数类型
typescript
// 定义函数的参数和返回值类型
interface GreetFunction {
    (name: string, age: number): string;
}

// 实现接口
const greet: GreetFunction = function(name: string, age: number): string {
    return `你好 ${name}，你 ${age} 岁了`;
};

console.log(greet('张三', 25)); // 你好 张三，你 25 岁了
3. 定义类的结构（类实现接口）
typescript
// 定义动物必须实现的方法
interface Animal {
    name: string;
    speak(): void;
    eat(food: string): void;
}

// 类实现接口
class Dog implements Animal {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
    speak(): void {
        console.log(`${this.name} 汪汪叫`);
    }
    
    eat(food: string): void {
        console.log(`${this.name} 吃 ${food}`);
    }
}

const dog = new Dog('旺财');
dog.speak(); // 旺财 汪汪叫
dog.eat('骨头'); // 旺财 吃 骨头
4. 定义数组/索引类型
typescript
// 定义数组：索引是数字，值是字符串
interface StringArray {
    [index: number]: string;
}

const fruits: StringArray = ['苹果', '香蕉', '橙子'];
console.log(fruits[0]); // 苹果

// 定义字典：键是字符串，值是数字
interface Dictionary {
    [key: string]: number;
}

const scores: Dictionary = {
    '张三': 95,
    '李四': 88,
    '王五': 92
};
console.log(scores['张三']); // 95
5. 定义混合类型（对象+函数）
typescript
// 既是函数又是对象的接口
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function createCounter(): Counter {
    let count = 0;
    const counter = function(start: number): string {
        count = start;
        return `当前计数: ${count}`;
    } as Counter;
    
    counter.interval = 1000;
    counter.reset = function() {
        count = 0;
    };
    
    return counter;
}

const counter = createCounter();
console.log(counter(5)); // 当前计数: 5
console.log(counter.interval); // 1000
counter.reset();
*/ 

enum ShapeKind {
    Circle = "circle",
    Square = "square"
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

var c: Circle = {
    kind: ShapeKind.Circle,
    radius: 10
};

console.log("圆形: " + JSON.stringify(c));