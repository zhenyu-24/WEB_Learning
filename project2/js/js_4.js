// 字符串
var str = "Hello, World!";
console.log(str.length); // 输出字符串长度

// charAt 方法： 获取指定位置的字符
console.log(str.charAt(7)); // 输出 'W'

// indexOf 方法： 查找子字符串的位置
console.log(str.indexOf("World")); // 输出 7

// slice 方法： 提取子字符串
var subStr = str.slice(0, 5);
console.log(subStr); // 输出 'Hello'

// substring 方法： 提取子字符串（类似于 slice）
var subStr2 = str.substring(7, 12);
console.log(subStr2); // 输出 'World'

// trim 方法： 去除字符串两端的空白
var strWithSpaces = "   Hello, World!   ";
console.log(strWithSpaces.trim()); // 输出 'Hello, World!'

// replace 方法： 替换子字符串
var newStr = str.replace("World", "JavaScript");
console.log(newStr); // 输出 'Hello, JavaScript!'

// split 方法： 分割字符串为数组
var strArray = str.split(", ");
console.log(strArray); // 输出 ['Hello', 'World!']

// toUpperCase 和 toLowerCase 方法： 转换大小写
console.log(str.toUpperCase()); // 输出 'HELLO, WORLD!'
console.log(str.toLowerCase()); // 输出 'hello, world!'

// concat 方法： 连接字符串
var greeting = "Hello, ";
var name = "Alice";
var fullGreeting = greeting.concat(name);
console.log(fullGreeting); // 输出 'Hello, Alice'