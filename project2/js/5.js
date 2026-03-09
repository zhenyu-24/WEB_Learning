// 数组
var arr = ['a', 'b', 'c'];
var arr2 = new Array('a', 'b', 'c');
console.log(arr);
console.log(arr2);

// 数组遍历
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (var item of arr) {
    console.log(item);
}

for (var index in arr) {
    console.log(arr[index]);
}

// 数组方法
var arr3 = [1, 2, 3];
console.log(arr3.length);   // 输出数组长度
console.log(Array.isArray(arr3)); // 判断是否为数组

console.log(arr3.push(4)); // 在数组末尾添加元素，返回新长度
console.log(arr3.pop());   // 删除数组末尾元素，返回被删除的元素
console.log(arr3.shift()); // 删除数组开头元素，返回被删除的元素
console.log(arr3.unshift(0)); // 在数组开头添加元素，返回新长度
console.log(arr3); // 输出当前数组

// 将数组元素连接成字符串，使用指定分隔符, 默认分隔符为逗号
result = arr3.join('-'); // 默认分隔符
console.log(result);
console.log(result.split('-')); // 将字符串分割成数组，使用指定分隔符

// concat() 方法用于合并两个或多个数组，返回一个新数组，不改变原数组
var arr4 = [4, 5, 6];
var arr5 = arr3.concat(arr4);
console.log(arr5);
console.log(arr5.concat([7, 8, 9, [10, 11, 12]])); // 输出 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, [10, 11, 12]]

// reverse() 方法用于颠倒数组中元素的顺序，改变原数组
arr5.reverse();
console.log(arr5); // 输出 [6, 5, 4, 3, 2, 1, 0]

// indexOf() 方法返回数组中第一个匹配元素的索引，如果没有找到则返回 -1
console.log(arr5.indexOf(3)); // 输出 3
console.log(arr5.indexOf(10)); // 输出 -1






