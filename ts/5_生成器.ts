

// 生成器函数：使用 function* 语法
function* numberGenerator() {
    yield 1;  // 暂停并返回 1
    yield 2;  // 暂停并返回 2
    yield 3;  // 暂停并返回 3
}

// 创建生成器实例
var gen = numberGenerator();

// 每次调用 next() 都会执行到下一个 yield
console.log("第一个: " + gen.next().value);
console.log("第二个: " + gen.next().value);
console.log("第三个: " + gen.next().value);
console.log("完成: " + gen.next().done);

// 第一个生成器
function* gen1() {
    yield 1;
    yield 2;
}

// 第二个生成器
function* gen2() {
    yield 3;
    yield 4;
}

// 组合生成器：使用 yield* 委托. 生成器类型：Generator<yield类型, return类型, next参数类型>
function* combined(): Generator<number, void, unknown>{
    yield* gen1();  // 委托给 gen1
    yield* gen2();  // 委托给 gen2
}

// 遍历组合生成器
// ✅ 使用 for...of 遍历
for (const num of combined()) {
    console.log("值: " + num);
}