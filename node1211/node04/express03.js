/*
模板引擎

 */
var express = require("express");
var app = express();

//指定渲染引擎
//下载 npm install ejs
//app.set("view engine",用的视图引擎);
app.set("view engine","ejs");
//设置模板文件目录
app.set("views",__dirname);//当前目录
app.get("/",(req,res)=>{
    res.render("muban",{
       name:"zhangsan",
       age:18
    });
});
app.listen(8080);