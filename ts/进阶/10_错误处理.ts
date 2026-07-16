/*
自定义错误类型
通过扩展 Error 类创建自定义错误类型，可以携带更多错误信息。

这使得错误处理更加精确和结构化。
*/ 
// 定义应用程序错误类
// 扩展内置 Error 类，添加错误码
class AppError extends Error {
    // 错误码，用于程序化处理错误
    code: string;

    // 构造函数
    constructor(message: string, code: string) {
        super(message);  // 调用父类构造函数
        this.name = "AppError";  // 设置错误名称
        this.code = code;  // 保存错误码
    }
}

// 安全的除法函数
function divide(a: number, b: number): number {
    // 检查除数是否为零
    if (b === 0) {
        // 抛出自定义错误
        throw new AppError("Cannot divide by zero", "DIVIDE_BY_ZERO");
    }
    return a / b;
}

// 使用 try-catch 捕获错误
try {
    var result = divide(10, 0);
} catch (error) {
    // 检查错误类型
    if (error instanceof AppError) {
        console.log("应用错误: " + error.message + ", 代码: " + error.code);
    } else {
        console.log("未知错误: " + error);
    }
}



/*
Result 类型避免异常
另一种错误处理方式是使用 Result 类型。

它通过返回值携带错误信息，而不是抛出异常。这种方式在函数式编程中很常见。
*/ 

// 定义 Result 类型，使用联合类型
// 成功时包含 ok: true 和值，失败时包含 ok: false 和错误
type Result<T, E = Error> =
    | { ok: true; value: T }
    | { ok: false; error: E };

// 使用 Result 类型的除法函数
function safeDivide(a: number, b: number): Result<number, string> {
    // 检查除数是否为零
    if (b === 0) {
        // 返回错误结果
        return { ok: false, error: "Cannot divide by zero" };
    }
    // 返回成功结果
    return { ok: true, value: a / b };
}

// 调用函数并处理结果
var result = safeDivide(10, 2);

// 根据结果类型进行处理
if (result.ok) {
    console.log("结果: " + result.value);
} else {
    console.log("错误: " + result.error);
}


/*
总结
良好的错误处理是构建健壮应用的基础。

自定义错误：扩展 Error 类，添加错误码等信息
Result 类型：通过返回值处理错误，避免异常
async/await：使用 try-catch 处理异步错误
错误封装：创建通用错误处理函数
错误边界：建立统一的错误处理机制
*/ 