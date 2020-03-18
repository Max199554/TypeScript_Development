//1.函数声明
function run():string{
    return 'Hello';
}
console.log(run());

//2.匿名函数
var fun2=function fun():number{
    return 123;
}
console.log(fun2());

//3.函数传参
    //例子1.
function getinfo(name:string, age:number):any
{
    return `${name} --- ${age}`;
}
console.log(getinfo('Hello', 13));

    //例子2.
var getinfo1=function(name:string, age:number):any
{
    return `${name} --- ${age}`;
}
console.log(getinfo1('Hello', 113));

//4.无返回值参数
function NoRet():void
{
    console.log("No Return");
}
NoRet();

//5.可选参数，添加?可以选择不添加参数
var getinfo2=function(name:string, age?:number):any
{
    if(age)
    {
        return `${name} --- ${age}`;
    }
    else
    {
        return `${name} --- 无`;
    }
}
console.log(getinfo2('Hello'));

//5.默认参数，在function添加默认值
var getinfo2=function(name:string, age:number=20):any
{
    if(age)
    {
        return `${name} --- ${age}`;
    }
    else
    {
        return `${name} --- 无`;
    }
}
console.log(getinfo2('Hello'));

//6.剩余参数,三点运算符
function sum(...result:number[]):number{
    let sum =0;
    for(let i=0;i<result.length;i++){
        sum+=result[i];
    }
    return sum;
}
console.log("The sum is:"+sum(1,2,3,4));

//函数重载
function getInfor(str:string):string;
function getInfor(str:number):string;
function getInfor(str:any):any{
    if(typeof str === 'string'){
        return "your name is:" +str;
    }
    else{
        return "your age is:"+str;
    }
}

console.log(getInfor(33));