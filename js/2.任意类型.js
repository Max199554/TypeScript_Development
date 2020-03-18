"use strict";
//1.任意类型,可以用来定义任意类型
var num = 2;
num = "str";
console.log(num);
//2.任意类型在给html元素添加style的写法
var obox = document.getElementById('box');
obox.style.color = 'red';
//3.一个变量可以多个声明
var num1;
num1 = 'hellow';
console.log(num1);
//4.无返回值的方法
function run1() {
    console.log("run");
}
run1();
//5.never类型，代表这个值不会出现的类型
//一般比较少用,一般用any代替
var a;
a = (() => {
    throw new Error("error");
})();
//# sourceMappingURL=2.任意类型.js.map