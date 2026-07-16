/*
声明文件是 TypeScript 与 JavaScript 库之间的翻译官，它告诉 TypeScript 一个 JavaScript 库暴露了哪些功能、参数是什么类型、返回值是什么类型。

先从一个问题说起
假设你正在用 TypeScript 写项目，需要引入一个第三方的 JavaScript 库（比如 jQuery），你可能会写出这样的代码：

$('#foo');
// 或
jQuery('#foo');
这段代码在纯 JavaScript 项目中完全没问题，但在 TypeScript 文件中会直接报错：

jQuery('#foo');

// index.ts(1,1): error TS2304: Cannot find name 'jQuery'.
为什么会报错？因为 TypeScript 不认识 $ 和 jQuery 是什么。

TypeScript 的核心功能就是类型检查——它在编译阶段就要知道每个变量、每个函数的类型。但 jQuery 是一个纯 JavaScript 库，没有任何类型信息，TypeScript 自然看不懂它。

快速修复：declare 关键字
最简单的方式是用 declare 关键字手动告诉 TypeScript：「这个变量存在，它的类型是这样的」：

declare var jQuery: (selector: string) => any;

jQuery('#foo');
这行代码的含义是：声明一个变量 jQuery，它是一个函数，接收一个 string 类型的参数，返回值可以是任意类型（any）。

现在 TypeScript 就不会报错了，因为编译器已经知道 jQuery 是什么类型。

declare 关键字声明的类型只在编译阶段起作用，编译后的 JavaScript 代码中会被完全删除，不会影响运行时的行为。

上例编译后的 JavaScript 代码为：

jQuery('#foo');
可以看到，declare 语句消失了，只剩下了实际的调用代码。

但 declare 只能解决单个文件的临时问题。如果一个库有很多方法、很多类，在每个文件里都手写 declare 显然不现实。这就是声明文件的用武之地。

声明文件：一劳永逸的方案
声明文件就是把所有 declare 声明集中放到一个单独的文件里，项目中的任何 TypeScript 文件都可以引用它。

文件命名规范
声明文件统一以 .d.ts 为后缀，d 代表 declaration（声明）。例如：

runoob.d.ts
基本语法
声明一个模块的语法如下：

declare module Module_Name {
}
在 TypeScript 文件中通过三斜线指令引入声明文件：

/// <reference path = "runoob.d.ts" />
三斜线指令是 TypeScript 特有的语法，用于告诉编译器在编译时需要包含指定的声明文件。

很多流行第三方库（如 jQuery、Lodash）的声明文件已经由社区维护好了，存放在 DefinitelyTyped 项目中。你只需要通过 npm 安装对应的 @types/xxx 包即可使用，无需手动编写。
*/ 