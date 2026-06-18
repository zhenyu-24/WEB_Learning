/*
使用 class 关键字来创建一个类，类体在一对大括号 {} 中，我们可以在大括号 {} 中定义类成员的位置，如方法或构造函数。

每个类中包含了一个特殊的方法 constructor()，它是类的构造函数，这种方法用于创建和初始化一个由 class 创建的对象。

定义好类后，我们就可以使用 new 关键字来创建对象.

关键字	描述
extends	继承一个类
static	在类中定义一个静态方法
super	调用父类的构造方法
*/ 

class Runoob {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

class Site {
  constructor(name) {
    this.sitename = name;
  }
  present() {
    return '我喜欢' + this.sitename;
  }
}
 
class Runoob2 extends Site {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  show() {
    return this.present() + ', 它创建了 ' + this.age + ' 年。';
  }

  static hello() {
    return "Hello!!";
  }
}