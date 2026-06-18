/* TypeScript Symbol

Symbol 是 ES6 引入的原始数据类型，表示唯一的标识符。
在 TypeScript 中，Symbol 可以用作对象的属性键，确保属性的唯一性。
这在需要创建私有属性、避免属性名冲突等场景非常有用。
*/ 

// 唯一
// 每次创建都是不同的
const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 === sym2); // false

// 即使描述相同，也不相等
const sym3 = Symbol('id');
const sym4 = Symbol('id');
console.log(sym3 === sym4); // false

// 永远独一无二
const sym5 = Symbol('unique');
const sym6 = Symbol('unique');
console.log(sym5 === sym6); // false

// 作为对象属性名（避免冲突）
// 使用字符串作为属性名可能会冲突
const obj1 = {
    id: 1,
    id: 2  // 覆盖了前面的 id
};
console.log(obj1.id); // 2

// 使用 Symbol 作为属性名，永远不会冲突
const id1 = Symbol('id');
const id2 = Symbol('id');

const obj2 = {
    [id1]: '第一个ID',
    [id2]: '第二个ID'
};

console.log(obj2[id1]); // 第一个ID
console.log(obj2[id2]); // 第二个ID