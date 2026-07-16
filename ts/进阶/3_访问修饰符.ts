/*
public 修饰符
public 是默认的访问修饰符，表示成员可以在任何地方被访问。

无论是类内部、子类还是类的外部，都可以访问 public 成员。

private 修饰符
private 表示私有成员，只能在定义它的类内部访问。

子类和类的外部都不能访问 private 成员。

这常用于隐藏类的内部实现细节，保护数据不被意外修改。

protected 修饰符
protected 表示受保护成员，可以在类内部和子类中访问。

类的外部不能直接访问 protected 成员。

这在需要让子类继承父类的某些功能，同时隐藏实现细节时非常有用。
*/ 

// 定义动物类
class Animal {
    // 使用 public 修饰 name 属性（可以省略，默认就是 public）
    public name: string;

    // 构造函数
    public constructor(name: string) {
        this.name = name;
    }

    // 公开的说话方法
    public speak(): void {
        console.log(this.name + " 发出声音");
    }
}

// 创建实例
var animal = new Animal("动物");

// 在类外部访问 public 属性
console.log(animal.name);

// 在类外部调用 public 方法
animal.speak();

// 定义银行账户类
class BankAccount {
    // 使用 private 修饰余额，只能在类内部访问
    private balance: number;

    // 构造函数
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    // 存款方法
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;  // 类内部可以访问 private 属性
            console.log("存款成功，当前余额: " + this.balance);
        }
    }

    // 获取余额
    public getBalance(): number {
        return this.balance;  // 类内部可以访问 private 属性
    }
}

// 创建账户实例
var account = new BankAccount(1000);

// 存款
account.deposit(500);

// 通过公共方法获取余额
console.log("余额: " + account.getBalance());

// 错误：在类外部不能直接访问 private 属性
// console.log(account.balance); // 编译错误！

// 定义人员基类
class Person {
    // 使用 protected 修饰 name，子类可以访问
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// 定义员工类，继承 Person
class Employee extends Person {
    // 部门是私有的
    private department: string;

    constructor(name: string, department: string) {
        super(name);  // 调用父类构造函数
        this.department = department;
    }

    // 自我介绍方法
    public introduce(): string {
        // 子类可以访问 protected 成员 name
        return "我是 " + this.name + "，在 " + this.department + " 工作";
    }
}

// 创建员工实例
var emp = new Employee("Alice", "技术部");

console.log(emp.introduce());

// 错误：在类外部不能访问 protected 成员
// console.log(emp.name); // 编译错误！