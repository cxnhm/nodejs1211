/*
stream  主要大数据文件处理

 */

var fs = require("fs");
var rs = fs.createReadStream("./1.mp4");
var ws = fs.createWriteStream("./3.mp4");
//循环触发   每次读取64k
var count = 0;

rs.pipe(ws);

/*rs.on("data",(chunk)=>{
   //console.log(chunk);
    count++;
    console.log(count);
   ws.write(chunk,(err)=>{
       if(err){
           console.error(err);
       }else {
           console.log("本次拷贝成功");
       }
   });
});
rs.on("end",()=>{
   console.log("数据读取结束");
});*/