// for 循环语句
for (var i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

// while 循环语句
var count = 0;
while (count < 3) {
    console.log("Count is: " + count);
    count++;
}

// do...while 循环语句
var index = 0;
do {
    console.log("Index is: " + index);
    index++;
} while (index < 2);

// break and continue 语句示例
for (var i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Skipping iteration 2");
        continue;
    }
    if (i === 4) {
        console.log("Breaking at iteration 4");
        break;
    }
    console.log("Iteration number: " + i);
}