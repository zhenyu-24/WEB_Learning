// 为什么需要项目引用
// 随着项目增长，单一的 tsconfig.json 会导致编译速度变慢。

// 项目引用允许将项目拆分为独立的子项目，每个子项目可以独立编译。

// 这不仅提高了编译速度，还提供了更好的代码组织方式。

// 概念：项目引用允许一个 TypeScript 项目引用其他项目，实现增量编译和更好的代码组织。

// 创建引用项目
// 首先创建被引用的子项目。

// packages/utils/tsconfig.json
// {
//     // 继承基础配置
//     "extends": "../../tsconfig.base.json",

//     // 编译器选项
//     "compilerOptions": {
//         // 输出目录
//         "outDir": "./dist",

//         // 声明文件目录
//         "declarationDir": "./dist/types",

//         // 生成声明文件
//         "declaration": true,

//         // 生成 sourcemap
//         "sourceMap": true,

//         // 是否为库
//         "composite": true
//     },

//     // 包含的文件
//     "include": ["src/**/*"],

//     // 排除的文件
//     "exclude": ["node_modules", "dist", "**/*.test.ts"]
// }
// composite：设置为 true 启用项目引用功能，这是被引用的项目必须设置的选项。

// 主项目配置
// 在主项目的 tsconfig.json 中配置 references。

// tsconfig.json (主项目)
// {
//     // 继承基础配置
//     "extends": "./tsconfig.base.json",

//     // 编译器选项
//     "compilerOptions": {
//         // 输出目录
//         "outDir": "./dist",

//         // 声明文件目录
//         "declarationDir": "./dist/types",

//         // 生成声明文件
//         "declaration": true,

//         // 生成 sourcemap
//         "sourceMap": true
//     },

//     // 项目引用配置
//     "references": [
//         // 引用 utils 项目
//         { "path": "./packages/utils" },

//         // 引用 ui 项目
//         { "path": "./packages/ui" },

//         // 引用 types 项目
//         { "path": "./packages/types" }
//     ],

//     // 包含的文件
//     "include": ["src/**/*"],

//     // 依赖包含的节点模块
//     // "files": []
// }