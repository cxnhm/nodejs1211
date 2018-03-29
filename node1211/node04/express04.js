/*
cookie

 */
var express = require("express");
var cookie = require("cookie-parser");
var app = express();

//使用中间件对cookie初始化
app.use(cookie());

app.get('/',(req,res)=>{

    if(req.cookies.login){
        res.send("你已经访问过这个网站");
    }else {
        var date = new Date();
        //date.setDate(date.getMinutes() + 1);
        res.cookie("login","1",{
            //expires:date
            maxAge:1000 * 30
        });
        res.send("第一次访问网站");
    }

});
app.listen(8080);