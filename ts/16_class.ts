/* TypeScript 类
类是面向对象编程（OOP）的核心概念，它是一种模板或蓝图，用于创建具有相同属性和方法的对象。TypeScript 完全支持面向对象编程，提供了类、继承、访问修饰符等特性。

类封装了数据（属性）和行为（方法），使得代码更加模块化、可复用和易维护。通过类，我们可以创建多个具有相同结构的对象，这些对象称为类的实例。

类的定义
TypeScript 使用 class 关键字定义类。一个类可以包含以下成员：

字段（Field）：类中声明的变量，表示对象的属性
构造函数（Constructor）：类实例化时调用的特殊方法，用于初始化对象
方法（Method）：类中定义的函数，表示对象的行为
语法格式
class class_name {
    // 字段声明
    field1: type;
    field2: type;

    // 构造函数
    constructor(parameters) {
        // 初始化代码
    }

    // 方法
    methodName(): return_type {
        // 方法实现
    }
}

说明：

this 关键字指向当前类的实例
构造函数的参数名可以与字段名相同，通过 this.field 区分
使用 new 关键字创建类的实例
*/ 
// 定义 Car 类
class Car {
    // 字段：描述汽车的属性
    engine: string;

    // 构造函数：在创建对象时初始化 engine
    constructor(engine: string) {
        this.engine = engine;
    }

    // 方法：显示发动机信息
    disp(): void {
        console.log("发动机型号: " + this.engine);
    }
}

// 创建类的实例
var car = new Car("V8 发动机");

// 访问字段
console.log("读取发动机: " + car.engine);

// 调用方法
car.disp();

/* 访问控制修饰符
TypeScript 提供了三种访问修饰符来控制类成员的可访问性：

修饰符	说明
public	公有成员，可以在任何地方访问（默认）
private	私有成员，只能在类内部访问
protected	受保护成员，可以在类内部和子类中访问
 */ 
class Person {
    public name: string;    // 公有属性
    public age: number;     // 公有属性

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public introduce(): void {
        console.log("我是 " + this.name + "，今年 " + this.age + " 岁");
    }
}

var person = new Person("Alice", 25);
console.log("姓名: " + person.name);   // 可以访问
person.introduce();                    // 可以访问


/* 类的继承
继承允许创建一个类（子类）从另一个类（父类）获取属性和方法。子类可以复用父类的代码，还可以扩展或重写父类的行为。

基本语法
class child_class extends parent_class {
    // 子类新增的属性和方法
}
*/
// 根类
class Root {
    str: string;
}

// 子类：继承 Root
class Child extends Root {
}

// 叶子类：继承 Child（多重继承）
class Leaf extends Child {
}

var leaf = new Leaf();
leaf.str = "hello";
console.log("str 值: " + leaf.str);

/*
方法重写（Override）
子类可以重写（Override）父类的方法，即在子类中定义与父类同名的方法，实现自己的行为。

使用 super 关键字可以调用父类的方法。
*/ 
// 父类
class PrinterClass {
    doPrint(): void {
        console.log("父类的 doPrint() 方法");
    }
}

// 子类：重写父类方法
class StringPrinter extends PrinterClass {
    doPrint(): void {
        // 调用父类的方法
        super.doPrint();

        // 子类自己的逻辑
        console.log("子类的 doPrint() 方法");
    }
}

var obj = new StringPrinter();
obj.doPrint();

/*
类实现接口
类可以使用 implements 关键字实现接口，确保类符合接口定义的契约。
*/ 
// 定义接口
interface ILoan {
    interest: number;  // 利率
}

// 类实现接口
class AgriLoan implements ILoan {
    interest: number;
    rebate: number;    // 回扣

    constructor(interest: number, rebate: number) {
        this.interest = interest;
        this.rebate = rebate;
    }
}

var loan = new AgriLoan(10, 1);
console.log("利率: " + loan.interest + "%，回扣: " + loan.rebate);

/*
抽象类
抽象类不能被实例化，只能作为基类供子类继承。抽象类可以包含抽象方法（没有实现的占位方法），子类必须实现这些方法。
*/ 
// 抽象类
abstract class Animal {
    abstract makeSound(): void;  // 抽象方法，子类必须实现

    move(): void {
        console.log("动物在移动");
    }
}

// 具体类：继承抽象类
class Dog extends Animal {
    makeSound(): void {
        console.log("汪汪汪!");
    }
}

var dog = new Dog();
dog.move();
dog.makeSound();