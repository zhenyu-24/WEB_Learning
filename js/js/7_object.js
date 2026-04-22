// 对象字面量
var person = {
    name: "Alice",
    age: 30,
    isEmployed: true,
    container: {
        type: "box",
        size: "large"
    },
    // 方法： 对象中的函数
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }   
};

// 访问对象属性
console.log(person.name); // 输出 'Alice'
console.log(person["age"]); // 输出 30
console.log(person.container.type); // 输出 'box'
person.greet(); // 输出 'Hello, my name is Alice'

