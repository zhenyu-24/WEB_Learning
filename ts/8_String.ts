/*
两种创建方式及核心区别
TypeScript 中创建字符串有两种方式，但二者在类型、性能和使用场景上有本质区别：

方式 1：字符串字面量（推荐）

这是 TypeScript/JavaScript 中最常用、性能最优的方式，创建的是原始字符串类型（string），也是 TypeScript 类型系统中默认的字符串类型。

// 原始字符串（推荐使用）
const txt1: string = "Hello TypeScript"; // 显式指定类型
const txt2 = "Hello JavaScript"; // 类型推导为 string

方式 2：String 对象（不推荐）

通过 new String() 创建的是包装对象类型（String），本质是一个对象，而非原始值，会带来类型混淆和性能损耗。

// String 对象（不推荐）
const txtObj: String = new String("Hello Object"); // 类型为 String（对象）


在 TypeScript 中，string 字面量类型和 String 对象类型不完全兼容。
例如，string 类型的变量无法直接使用 String 对象的方法，反之亦然。因此，通常情况下不需要使用 String 对象。
*/ 

var strLiteral = "Test";
var strObject = new String("Test");
console.log(strLiteral === strObject); // 输出：false，内容相同，类型不同
console.log(strLiteral == strObject); // 输出：true，内容相同
console.log(strLiteral === strObject.valueOf()); // 输出：true，将对象转为原始字符串后比较


/*
String 对象的使用建议
在 TypeScript 中，使用 String 对象通常是不必要的，直接使用 string 字面量会更高效且符合 TypeScript 的最佳实践：

性能：String 对象是一个引用类型，会占用更多内存，且每次创建一个新对象性能开销更大。
类型安全：TypeScript 更鼓励使用 string 字面量类型，保持代码的简洁和一致性。
*/ 