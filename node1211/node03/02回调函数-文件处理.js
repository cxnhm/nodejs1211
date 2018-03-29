//fs处理文件的组件   读写文件
var fs = require("fs");

//异步
//参数1:文件名
//参数2:编码格式
//参数3:回调函数
/*fs.readFile("./1.txt","utf-8",(err,data)=>{
    console.log(err);
    console.log(data);
});*/

//同步

var data = fs.readFileSync("./1.txt","utf-8");//阻塞
console.log(data);