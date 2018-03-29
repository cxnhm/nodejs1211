/*
fs
文件操作
目录操作

 */

var fs = require("fs");
//异步
fs.readFile("./1.jpg","",(err,data)=>{
    console.log(data);
});

//同步
var data = fs.readFileSync("./1.jpg");
console.log(data);

//写数据 w覆盖写 a追加写
//异步
fs.writeFile("./1.txt","我要写的数据",{
    flag:"a"
},(err)=>{
    if(err){
        console.error(err);
    }else {
        console.log("写入成功");
    }
});
//同步
fs.writeFileSync("./1.txt","同步写的数据",{flag:"a"});
