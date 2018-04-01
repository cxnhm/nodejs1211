var express = require("express");
var formidable = require("formidable");
var fs = require("fs");
var app = express();



var mongoose = require("mongoose");

var url = "mongodb://127.0.0.1:27017/index";
var db = mongoose.connect(url,(err)=>{
    if (err){
        console.error("连接失败："+err)
    }else {
        console.log("连接成功")
    }
});

var schema = new mongoose.Schema({
    username:{type:String},
    password:{type:String}

},{
    //集合名(表)
    collection:"user"
});

var Model = mongoose.model("user",schema);



//html 页面
app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/login.html");
});
app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/register.html");
});
app.get("/index",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});


//注册
//post
app.post("/register/post",(req,res)=>{
    var form = new formidable.IncomingForm();
    form.parse(req,(err,args,files)=>{
        if(err){
            console.error(err);
        }else {

            //判断用户是否存在
            var username = args["username"];
            Model.findOne({username:username},(err,doc)=>{
                if (err){
                    console.error(err)
                }else {
                    //如果不存在则注册
                    if(doc){
                        console.log("用户已存在")
                    }else {
                        Model.create(args,(err,doc)=>{
                            if (err){
                                console.error(err)
                            }else {
                                console.log(doc);
                            }
                        });
                    }
                }
            });
        }
    })
});
//登录
//post
app.post("/login/post",(req,res)=>{
    var form = new formidable.IncomingForm();
    form.parse(req,(err,args,files)=>{
        if(err){
            console.error(err);
        }else {
            Model.findOne(args,(err,doc)=>{
                if (err){
                    console.error(err)
                }else {
                    if(doc){
                        console.log("登录成功");
                        //跳转
                        res.redirect('http://127.0.0.1:8080/index');

                    }else {
                        console.log("用户不存在")
                    }
                }
            });
        }
    })
});


app.get("/index/ajax",(req,res)=>{



});







//其它文件
app.all("*",(req,res)=>{
    res.sendFile(__dirname + req.path);
});


app.listen(8080);