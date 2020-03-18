"use strict";
//数字类型
var n = 13;
console.log(n);
//字符串类型
var s = "Hello";
s = "World";
console.log(s);
//数组类型
var arr = [1, 3, 4];
console.log(arr);
//数组类型（第二种）
var arr1 = [2, 4, 5];
console.log(arr1);
//元组类型
var arr2 = [12, 'Hello'];
console.log(arr2);
//枚举的用法,获取的值是为index
//例子1
var flag;
(function (flag) {
    flag[flag["success"] = 1] = "success";
    flag[flag["error"] = 2] = "error";
})(flag || (flag = {}));
;
let f = flag.success;
console.log(f);
//例子2
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 5] = "blue";
    color[color["black"] = 6] = "black";
})(color || (color = {}));
;
let c = color.black;
console.log(c);
//# sourceMappingURL=1.数据类型.js.map