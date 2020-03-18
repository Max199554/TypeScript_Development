"use strict";
//1.函数声明
function run() {
    return 'Hello';
}
console.log(run());
//2.匿名函数
var fun2 = function fun() {
    return 123;
};
console.log(fun2());
//3.函数传参
//例子1.
function getinfo(name, age) {
    return `${name} --- ${age}`;
}
console.log(getinfo('Hello', 13));
//例子2.
var getinfo1 = function (name, age) {
    return `${name} --- ${age}`;
};
console.log(getinfo1('Hello', 113));
//4.无返回值参数
function NoRet() {
    console.log("No Return");
}
NoRet();
//5.可选参数，添加?可以选择不添加参数
var getinfo2 = function (name, age) {
    if (age) {
        return `${name} --- ${age}`;
    }
    else {
        return `${name} --- 无`;
    }
};
console.log(getinfo2('Hello'));
//5.默认参数，在function添加默认值
var getinfo2 = function (name, age = 20) {
    if (age) {
        return `${name} --- ${age}`;
    }
    else {
        return `${name} --- 无`;
    }
};
console.log(getinfo2('Hello'));
//6.剩余参数,三点运算符
function sum(...result) {
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log("The sum is:" + sum(1, 2, 3, 4));
function getInfor(str) {
    if (typeof str === 'string') {
        return "your name is:" + str;
    }
    else {
        return "your age is:" + str;
    }
}
console.log(getInfor(33));
//# sourceMappingURL=3.函数.js.map