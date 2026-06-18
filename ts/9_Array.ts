var sites:string[]; 
sites = ["Google","Runoob","Taobao"] 
console.log(sites[0]); 
console.log(sites[1]);

var sites:string[] = new Array("Google","Runoob","Taobao","Facebook") 
 
for(var i = 0;i<sites.length;i++) { 
        console.log(sites[i]) 
}

// 数组解构
var arr_num:number[] = [12,13] 
var[x,y] = arr_num // 将数组的两个元素赋值给变量 x 和 y
console.log(x) 
console.log(y) 

// 多维数组
var multi:number[][] = [[1,2,3],[23,24,25]]  
