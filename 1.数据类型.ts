//数字类型
var n:number = 13;
console.log(n);

//字符串类型
var s:string = "Hello";
s="World";
console.log(s);

//数组类型
var arr:number[]=[1,3,4];
console.log(arr);

//数组类型（第二种）
var arr1:Array<number>=[2,4,5];
console.log(arr1);

//元组类型
var arr2:[number,string]=[12,'Hello'];
console.log(arr2);

//枚举的用法,获取的值是为index
//例子1
enum flag {success=1, error=2};
let f:flag=flag.success;
console.log(f);
//例子2
enum color {red,blue=5,'black'};
let c:color = color.black;
console.log(c);