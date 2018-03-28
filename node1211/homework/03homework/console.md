#console的方法
----
###1.console.assert(expression,object[,object...])
#####接收至少两个参数，第一个参数的值或返回值为false的时候，将会在控制台上输出后续参数的值
+ console.assert(1 == 1,object);//无输出，返回 undefined
+ console.assert(1 == 2,object);//输出 object

###2.console.count([label])
#####输出执行到该行的次数，可选参数 label 可以输出在次数之前
```
(function() {
  for (var i = 0; i < 5; i++) {
    console.count('count');
  }
})();
// count: 1
// count: 2
// count: 3
// count: 4
// count: 5
```
###3.console.dir(object)
#####将传入对象的属性，包括子对象的属性以列表形式输出
```
var obj = {
  name: 'classicemi',
  college: 'HUST',
  major: 'ei'
};
console.dir(obj);
```
###4.console.error(object[, object...])
#####用于输出错误信息，用法和常见的console.log一样，不同点在于输出内容会标记为错误的样式，便于分辨
###5.console.group()
#####它能够让控制台输出的语句产生不同的层级嵌套关系，每一个console.group()会增加一层嵌套，相反要减少一层嵌套可以使用console.groupEnd()方法
```
console.log('这是第一层');
console.group();
console.log('这是第二层');
console.log('依然第二层');
console.group();
console.log('第三层了');
console.groupEnd();
console.log('回到第二层');
console.groupEnd();
console.log('回到第一层');
```
###6.console.info(object[, object...])
#####此方法与之前说到的console.error一样，用于输出信息，没有什么特别之处。
```
console.info('info'); // 输出 info
```
###7.console.table()
#####可将传入的对象，或数组以表格形式输出，相比传统树形输出，这种输出方案更适合内部元素排列整齐的对象或数组，不然可能会出现很多的 undefined。
```
var obj = {
  foo: {
    name: 'foo',
    age: '33'
  },
  bar: {
    name: 'bar',
    age: '45'
  }
};

var arr = [
  ['foo', '33'],
  ['bar', '45']
];

console.table(obj);
console.table(arr);
```
###8.console.profile([profileLabel])
#####用于性能分析。在 JS 开发中，我们常常要评估段代码或是某个函数的性能。在函数中手动打印时间固然可以，但显得不够灵活而且有误差。借助控制台以及console.profile()方法我们可以很方便地监控运行性能。
```
function parent() {
  for (var i = 0; i < 10000; i++) {
    childA()
  }
}

function childA(j) {
  for (var i = 0; i < j; i++) {}
}

console.profile('性能分析');
parent();
console.profileEnd();
```
###9.console.time(name)
#####计时器，可以将成对的console.time()和console.timeEnd()之间代码的运行时间输出到控制台上，name参数可作为标签名。
```
console.time('计时器');
for (var i = 0; i < 1000; i++) {
  for (var j = 0; j < 1000; j++) {}
}
console.timeEnd('计时器');
```
###10.console.trace()
#####console.trace()方法可以将函数的被调用过程清楚地输出到控制台上。
```
function tracer(a) {
  console.trace();
  return a;
}

function foo(a) {
  return bar(a);
}

function bar(a) {
  return tracer(a);
}

var a = foo('tracer');
```
###11.console.warn(object[, object...])
#####输出参数的内容，作为警告提示。
```
console.warn('warn'); // 输出 warn
```