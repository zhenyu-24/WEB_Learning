

let text = '{ "sites" : [' +
'{ "name":"Runoob" , "url":"www.runoob.com" },' +
'{ "name":"Google" , "url":"www.google.com" },' +
'{ "name":"Taobao" , "url":"www.taobao.com" } ]}';

//用 JavaScript 内置函数 JSON.parse() 将字符串转换为 JavaScript 对象:
let obj = JSON.parse(text);
console.log(obj.sites[1].name);

let obj2 = JSON.stringify(obj);
console.log(obj2);