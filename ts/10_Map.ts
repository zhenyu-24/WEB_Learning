/*
TypeScript Map 对象
Map 对象保存键值对，并且能够记住键的原始插入顺序。
任何值(对象或者原始值) 都可以作为一个键或一个值。

Map 相关的函数与属性：

map.clear() – 移除 Map 对象的所有键/值对 。
map.set() – 设置键值对，返回该 Map 对象。
map.get() – 返回键对应的值，如果不存在，则返回 undefined。
map.has() – 返回一个布尔值，用于判断 Map 中是否包含键对应的值。
map.delete() – 删除 Map 中的元素，删除成功返回 true，失败返回 false。
map.size – 返回 Map 对象键/值对的数量。
map.keys() - 返回一个 Iterator 对象， 包含了 Map 对象中每个元素的键 。
map.values() – 返回一个新的Iterator对象，包含了Map对象中每个元素的值 。
map.entries() – 返回一个包含 Map 中所有键值对的迭代器 。

常用函数
set(key: K, value: V): this - 向 Map 中添加或更新键值对。

map.set('key1', 'value1');
get(key: K): V | undefined - 根据键获取值，如果键不存在则返回 undefined。

const value = map.get('key1');
has(key: K): boolean - 检查 Map 中是否存在指定的键。

const exists = map.has('key1');
delete(key: K): boolean - 删除指定键的键值对，成功删除返回 true，否则返回 false。

const removed = map.delete('key1');
clear(): void - 清空 Map 中的所有键值对。

map.clear();
size: number - 返回 Map 中键值对的数量。

const size = map.size;

迭代方法
keys(): IterableIterator<K> - 返回一个包含 Map 中所有键的迭代器。
for (const key of map.keys()) {
  console.log(key);
}
values(): IterableIterator<V> - 返回一个包含 Map 中所有值的迭代器。

for (const value of map.values()) {
  console.log(value);
}
entries(): IterableIterator<[K, V]> - 返回一个包含 Map 中所有键值对的迭代器，每个元素是一个 [key, value] 数组。

for (const [key, value] of map.entries()) {
  console.log(key, value);
}
forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void - 对 Map 中的每个键值对执行一次提供的回调函数。

map.forEach((value, key) => {
  console.log(key, value);
});
*/ 

const map = new Map<string, number>();

map.set('one', 1);
map.set('two', 2);

console.log(map.get('one')); // 输出: 1

console.log(map.has('two')); // 输出: true

map.delete('one');

console.log(map.size); // 输出: 1

map.forEach((value, key) => {
  console.log(key, value); // 输出: two 2
});

map.clear();

console.log(map.size); // 输出: 0
