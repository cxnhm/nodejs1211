
function add(a,b) {
    return a + b + y + z;
}

var x = 10;
var y = 100;
var z = 50;

m = 100;//模块内定义变量需要使用var 否则为全局变量
//console.log(add(1,2));

//定义模块时 需要对外留接口
//将模块导出 并设置导出接口
// :前是对外的接口名  ：后是真正的接口
module.exports = {
    //对外的接口名:真正的接口
    Add: add,
    y : x
};