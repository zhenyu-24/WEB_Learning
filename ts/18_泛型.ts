/* TypeScript 泛型
泛型（Generics）是一种编程语言特性，允许在定义函数、类、接口等时使用占位符来表示类型，而不是具体的类型。

泛型是一种在编写可重用、灵活且类型安全的代码时非常有用的功能。

使用泛型的主要目的是为了处理不特定类型的数据，使得代码可以适用于多种数据类型而不失去类型检查。

泛型的优势包括：

代码重用： 可以编写与特定类型无关的通用代码，提高代码的复用性。

类型安全： 在编译时进行类型检查，避免在运行时出现类型错误。

抽象性： 允许编写更抽象和通用的代码，适应不同的数据类型和数据结构。

泛型标识符
在泛型中，通常使用一些约定俗成的标识符，比如常见的 T（表示 Type）、U、V 等，但实际上你可以使用任何标识符。

T: 代表 "Type"，是最常见的泛型类型参数名。

function identity<T>(arg: T): T {
    return arg;
}
K, V: 用于表示键（Key）和值（Value）的泛型类型参数。

interface KeyValuePair<K, V> {
    key: K;
    value: V;
}
E: 用于表示数组元素的泛型类型参数。

function printArray<E>(arr: E[]): void {
    arr.forEach(item => console.log(item));
}
R: 用于表示函数返回值的泛型类型参数。

function getResult<R>(value: R): R {
    return value;
}
U, V: 通常用于表示第二、第三个泛型类型参数。

function combine<U, V>(first: U, second: V): string {
    return `${first} ${second}`;
}
*/ 

// 泛型函数
function identity<T>(arg: T): T {
    return arg;
}

// 使用泛型函数
let result = identity<string>("Hello");
console.log(result); // 输出: Hello

let numberResult = identity<number>(42);
console.log(numberResult); // 输出: 42


// 泛型接口
interface Pair<T, U> {
    first: T;
    second: U;
}

// 使用泛型接口
let pair: Pair<string, number> = { first: "hello", second: 42 };
console.log(pair); // 输出: { first: 'hello', second: 42 }


// 泛型类
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

// 使用泛型类
let stringBox = new Box<string>("TypeScript");
console.log(stringBox.getValue()); // 输出: TypeScript