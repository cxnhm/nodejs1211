[ECMAScript 6 入门](http://es6.ruanyifeng.com/)
# ES6

## let 和 const
### let
**用法**：用来声明变量，类似于var。但声明的变量只在let命令所在的代码块内有效	

```javascript
{
let a = 10;
var b = 1;
}
console.log(a);//报错
console.log(b);//1
```
1. let在循环中的应用	

```javascript
var arr = [];
for (let i = 0;i<10;i++){
    arr[i] = function () {
        console.log(i);
    }
}
arr[6]();//6
```
2. 不能提升变量     
**变量在声明之后才可使用**  

```javascript
//var
console.log(foo);//undefined
var foo = 2;

//let
console.log(bar)；//报错
let bar = 2；
```
3. 暂时性死区   
**在代码块内，使用let声明变量之前，该变量是不可用的**
**只要作用域内用let声明了变量，就不受外部影响** 

```javascript
var temp = 123;
if(true){
    tmp = 'abc';//报错
    let tmp；
}
```
4. 不允许重复声明   
**let不能在同一作用域内重复声明变量**  

```javascript
function funa(){
    let a = 10;
    var a = 10;//报错
    let a = 20;//报错
}
function funb(arg){
    let arg;//报错
    {
        let arg;//不报错
    }
}
```
5. 块级作用域   
**let是ES6新增的块级的作用域**

```javascript
{
    {
        {
            let a = "hello world";
        }
        console.log(a);//报错
    }
}

```
### const
1. 不可更改
**const是一个只读常量，一但声明，不能更改**     

```javascript
const PI = 3.1415926;
console.log(PI);//3.1415926;

PI = 3;//报错
```
2. 声明后必须赋值   

```javascript
const PI;
//报错
```
3. 块级作用域
4. 暂时性死区
5. 本质：所指内存地址不得改动 
**不能将其指向另一个地址**

```javascript
const a = [];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
a = ['Dave'];    // 报错
```
数组a，本身可写，但如果讲另一个数组赋值给a就会报错。    


## 变量的结构赋值
**解构：ES6允许按照一定模式，从数组和对象中提取，对变量进行赋值**
### 数组的解构赋值      

```javascript
let [a,b,c] = [1,2,3]
a;//1
b;//2
c;//3

let[x,[[y,],z]] = [,[4,5],6];
x;//如果解构不成功，值为undefined
y;//4
z;//6
```

1. 如果等式右边不是数组，也会报错  

```javascript
let [foo] = 1;//报错
```

2. 指定默认值   

```javascript
let [x, y = 'b'] = ['a']; 
// x='a', y='b'
```

### 对象的解构赋值

```javascript
let {foo,bar} = {foo:"aaa",bar:"bbb"};
//可以改变顺序
let {foo,bar} = {bar:"bbb"，foo:"aaa"};
foo;//"aaa"
bar;//"bbb"
```
1. 默认值   

```javascript
var {x, y = 5} = {x: 1};
x // 1
y // 5
```

### 字符串的解构赋值
**字符串解构赋值被转换成了一个类似数组的对象**  

```javascript
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
```

+ length属性    

```javascript
let {length : len} = 'hello';
len // 5
```

### 数值和布尔值的解构赋值
**数值和布尔值，则会先转为对象**    

```javascript
let {toString: s} = 123;
s === Number.prototype.toString // true
let {toString: s} = true;
s === Boolean.prototype.toString // true
```

### 函数参数解构赋值  

```javascript
function add([x, y]){
  return x + y;
}
add([1, 2]); // 3
```

### 解构赋值的用途
1. 交换变量的值     

```javascript
let x = 1;
let y = 2;

[x, y] = [y, x];
```

2. 函数返回多个值   

```javascript
// 返回一个数组
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象
function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();
```

3. 函数参数的定义   

```javascript
// 参数是一组有次序的值
function f([x, y, z]) { ... }
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});
```

4. 提取 JSON 数据   

```javascript
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]
```

## 函数的扩展
### 箭头函数
#### 基本用法
**ES6允许使用"箭头"(=>)定义函数**   

```javascript
//一个参数
var f = v => v;
//等同于
var f = function(v) {
  return v;
};


//没有参数或多个参数时使用()
//没有参数
var f = () => 5;
// 等同于
var f = function () { return 5 };

//多个参数
var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};

```
