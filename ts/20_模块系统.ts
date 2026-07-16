/*
模块导出
使用 export 关键字可以将变量、函数、类、接口等导出供其他模块使用。

模块导入
使用 import 关键字从其他模块导入导出的内容。

默认导出
每个模块可以有一个默认导出。
默认导出在导入时不需要使用花括号，且可以取任意名字。

动态导入
动态导入（Dynamic Import）使用 import() 语法，可以在运行时按需加载模块。
这对于代码分割、懒加载非常有用。
*/ 
// 导出变量
export var name = "Alice";
export const age = 25;

// 导出函数
export function greet(message: string): string {
    return "Hello, " + message;
}

// 导出类
export class User {
    // 构造函数参数属性
    constructor(public name: string) {}

    // 自我介绍方法
    introduce(): string {
        return "I am " + this.name;
    }
}

// 导出接口（接口在编译后会消失，仅用于类型检查）
export interface Config {
    // 配置主机
    host: string;
    // 配置端口
    port: number;
}

// 批量导出：重命名导出
export { name as userName, age as userAge };


/*
// 命名导入：从模块中导入指定的内容
import { name, age, greet } from "./user";

// 默认导入：导入模块的默认导出
import User from "./user";

// 全部导入：将模块所有导出放入一个对象
import * as UserModule from "./user";

// 重命名导入：避免命名冲突
import { greet as sayHello } from "./user";

// 使用导入的内容
console.log(greet("World"));
console.log(sayHello("TypeScript"));
*/ 
