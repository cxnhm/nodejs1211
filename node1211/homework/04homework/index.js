var express = require("express");
var formidable = require("formidable");
var fs = require("fs");

var app = express();

//html 页面
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
//ajax
app.get("/ajax",(req,res)=>{
    fs.readFile("./1.txt","utf-8",(err,data)=>{
        console.log(data)
    })

})


//post
app.post("/post",(req,res)=>{
    var form = new formidable.IncomingForm();
    form.parse(req,(err,args,files)=>{
        if(err){
            console.error(err);
        }else {
            var data = JSON.stringify(args);
            fs.writeFile("./1.txt",data,{
                flag:"a"
            },(err)=>{
                if (err){
                    console.error(err)
                }else {
                    console.log("写入成功")
                }
            })
        }
    })
});


//其它文件
app.all("*",(req,res)=>{
    res.sendFile(__dirname + req.path);
});


app.listen(8080);

