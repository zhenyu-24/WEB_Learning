/* 
使用 async 关键字声明异步函数。
await 等待 Promise 完成并获取结果。
*/ 

// 模拟异步操作
function delay(ms: number): Promise<string> {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("完成!");
        }, ms);
    });
}

async function main() {
    console.log("开始...");
    var result = await delay(100);
    console.log("结果: " + result);
    console.log("结束");
}

main();

function fetchUser(id: number): Promise<{ id: number; name: string }> {
    return Promise.resolve({ id: id, name: "User" + id });
}

async function main2() {
    // 串行执行
    console.time("串行");
    var user1 = await fetchUser(1);
    var user2 = await fetchUser(2);
    console.log("串行完成: " + user1.name + ", " + user2.name);
    console.timeEnd("串行");

    // 并行执行
    console.time("并行");
    var results = await Promise.all([fetchUser(1), fetchUser(2)]);
    console.log("并行完成: " + results[0].name + ", " + results[1].name);
    console.timeEnd("并行");
}

main2();