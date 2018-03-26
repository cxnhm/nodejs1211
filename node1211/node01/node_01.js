//git 测试
console.log("hello node");



{
    var a = 10;
    let b = 11;//let有作用域  只在当前代码段有效
    console.log(b);
}
console.log(a);
//console.log(b);

var arr = [];
for(let i = 0;i < 10;i++){
    arr[i] = function () {
        console.log(i);
    };
}
arr[6]();//6