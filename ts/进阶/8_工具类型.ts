/*
Partial<T>：将所有属性变为可选
Required<T>：将所有属性变为必填
Readonly<T>：将所有属性变为只读
Pick<T,K>：选择指定属性
Omit<T,K>：排除指定属性
Record<K,T>：构造对象类型
Exclude/Extract：类型过滤
NonNullable：排除 null 和 undefined
ReturnType：获取函数返回类型
*/ 

// 定义用户接口，包含必填属性
interface User {
    // 用户 ID
    id: number;
    // 用户名
    name: string;
    // 用户邮箱
    email: string;
}

// Partial：将所有属性变为可选
// 转换后的类型所有属性都是可选的
type PartialUser = Partial<User>;

// 使用 PartialUser 类型
// 可以只提供部分属性，不需要全部提供
var user: PartialUser = { name: "Alice" };

console.log("部分用户: " + JSON.stringify(user));

// 定义配置接口，属性都是可选的
interface Config {
    // 服务器地址
    host?: string;
    // 端口号
    port?: number;
}

// Required：将所有可选属性变为必填
// 转换后的类型所有属性都是必填的
type RequiredConfig = Required<Config>;

// 使用 RequiredConfig 类型
// 必须提供所有属性
var config: RequiredConfig = { host: "localhost", port: 8080 };

console.log("配置: " + JSON.stringify(config));