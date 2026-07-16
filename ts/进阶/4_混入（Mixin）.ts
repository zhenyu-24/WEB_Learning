/*
混入（Mixin）是一种代码复用模式，用于将多个独立的功能模块混入到一个类中。

TypeScript 通过泛型函数返回扩展类的方式实现 Mixin，弥补了单继承无法复用多个来源行为的不足。

Mixin 的核心是一个接收基类、返回扩展类的泛型函数。Constructor 类型约束用于描述"任意可被继承的类"。

Mixin 与继承的对比
维度	继承（extends）	Mixin
来源数量	只能继承一个父类	可叠加任意数量
耦合程度	子类与父类强耦合	每个 Mixin 独立，低耦合
复用粒度	复用整个类的能力	按需复用单一功能
类型安全	原生支持	需借助泛型约束保证
适用场景	强 "is-a" 关系	横切关注点（日志、序列化、缓存等）
总结
核心模式：Mixin 是接收基类、返回扩展类的泛型函数，Constructor<T> 是标准约束类型
能力叠加：嵌套调用多个 Mixin 函数即可将多份能力组合到同一个类
接口结合：Mixin 返回的类可以实现接口，消费方只需依赖接口而非具体类
泛型约束：通过约束 TBase 可以限定 Mixin 的适用范围，在编译期阻止错误使用
适用场景：日志、序列化、克隆、时间戳等横切关注点，优于多层继承
*/ 

type Constructor<T = {}> = new (...args: any[]) => T;

// Mixin 1：添加时间戳
function Timestamped<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        createdAt = new Date();
    };
}

// Mixin 2：添加序列化
function Serializable<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        serialize(): string {
            return JSON.stringify(this);
        }
    };
}

// Mixin 3：添加日志（依赖 serialize 方法）
function Loggable<TBase extends Constructor<{ serialize(): string }>>(Base: TBase) {
    return class extends Base {
        log(): void {
            console.log("[LOG]", this.serialize());
        }
    };
}

class Product {
    constructor(public name: string, public price: number) {}
}

// 依次叠加三个 Mixin
const AdvancedProduct = Loggable(Serializable(Timestamped(Product)));

const p = new AdvancedProduct("Phone", 999);
p.log();
console.log(p.createdAt instanceof Date);  // true

/* your output
[LOG] {"name":"Phone","price":999,"createdAt":"2026-..."}
true
*/ 