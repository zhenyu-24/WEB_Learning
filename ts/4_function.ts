/* 
function function_name(param1 [:datatype], param2 [:datatype]):return_type { 
    // 语句
    return value; 
}
*/ 

// 函数定义
function greet():string { // 返回一个字符串
    return "Hello World" 
} 
 
function caller() { 
    var msg = greet() // 调用 greet() 函数 
    console.log(msg) 
} 
 
// 调用函数
caller()

function add(x: number, y: number): number {
    return x + y;
}
console.log(add(1,2))

/* 可选参数和默认参数

在 TypeScript 函数里，如果我们定义了参数，则我们必须传入这些参数，除非将这些参数设置为可选，可选参数使用问号标识 ？。

function function_name(param1[:type],param2[:type] = default_value) { 
}
*/ 
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
 
let result1 = buildName("Bob");  // 正确
let result2 = buildName("Bob", "Adams");  // 正确
console.log(result1, result2)

/* 剩余参数

有一种情况，我们不知道要向函数传入多少个参数，这时候我们就可以使用剩余参数来定义。
剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入。
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
  
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
*/ 
function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("和为：",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)

/* 匿名函数

匿名函数是一个没有函数名的函数。

匿名函数在程序运行时动态声明，除了没有函数名外，其他的与标准函数一样。

我们可以将匿名函数赋值给一个变量，这种表达式就成为函数表达式。

语法格式如下：
var res = function( [arguments] ) { ... }
*/  
var msg = function () {
    return "hello world";
};
console.log(msg());

/* 函数重载

重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。

每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。

参数类型不同：

function disp(string):void; 
function disp(number):void;
参数数量不同：

function disp(n1:number):void; 
function disp(x:number,y:number):void;
参数类型顺序不同：

function disp(n1:number,s1:string):void; 
function disp(s:string,n:number):void;
如果参数类型不同，则参数类型应设置为 any。

参数数量不同你可以将不同的参数设置为可选
*/ 
function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 
 
function disp(x:any,y?:any):void { 
    console.log(x); 
    console.log(y); 
} 
disp("abc") 
disp(1,"xyz");