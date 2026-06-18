/* for 循环
for ( init; condition; increment ){
    statement(s);
}
*/ 

var my_num:number = 5; 
var i:number; 
var factorial = 1; 
 
for(i = my_num;i>=1;i--) {
   factorial *= i;
}
console.log(factorial)

/* for...in 循环
for (var val in list) { 
    //语句 
}
*/ 
var j:any; 
var n:any = "a b c" 
 
for(j in n) {
    console.log(n[j])  
}

/* while 循环
while(condition)
{
   statement(s);
}
*/ 

var my_num:number = 5; 
var factorial:number = 1; 
 
while(my_num >=1) { 
    factorial = factorial * my_num; 
    my_num--; 
} 
console.log("5 的阶乘为："+factorial);

/* do...while 循环
do
{
   statement(s);
}while( condition );
*/ 

var m:number = 10;
do { 
    console.log(m); 
    m--; 
} while(m>=0);