/**
 * Created by lifetea on 2016/11/7.
 */
// import example from '../util/Example'
const example = require('../util/Example');

example.build("块级作用域",function () {
    //block
    {
        var a = 1;
        let b = 2;
    }
    console.log(a)//1
    try {
        console.log(b)//b is not defined
    }catch(e){
        console.log('b is not defined')
    }
})


example.build("let在for中",function () {
    //let in for
    for(let i = 0;i < 10;i++){

    }
    try {
        console.log(i)//b is not defined
    }catch(e){
        console.log('i is not defined')
    }

})


example.build("var在for中",function () {
    //var in for
    for(var j = 0;j < 10 ; j++){

    }
    console.log(j)
})


example.build("闭包中使用var的影响",function () {
    //闭包中使用var的影响
    for(var k=0,arr=[];k<10;k++){
        arr[k] = function () {
            return k
        }
    }
    console.log(arr[0]())
})


example.build("闭包中使用let",function () {
    //闭包中使用let
    var arr2 = []
    for(let l = 0 ;l < 10 ; l++){
        arr2[l] = function () {
            return l
        }
    }
    console.log(arr2[0]())
})


example.build("变量提升",function () {
    //变量提升
    try {
        console.log(a)
    }catch(e){
        console.log('a is not defined')
    }

    console.log(b)

    let a = 1
    var b = 2
})

example.build("暂时性死区",function () {
    //暂时性死区
    var a = 1;
    if(true){
        try{
            a = 2
            let a = 3
        }catch(e){
            console.log('a is not defined')
        }
    }
    try{
        let b = a,a=2
    }catch (e){
        console.log('a is not defined')
    }
})



example.build('隐蔽的死区',function () {
    // function bar(x = y, y = 2) {
    //     return [x, y];
    // }
    //bar(); // 报错
})



example.build("重复赋值",function () {
    //同一个作用域不能重复赋值
    try{
        //var a = 2;
        let a = 1;
    }catch (e){

    }
    function c(arg) {
        //let arg = 2
    }
})

example.build("提前声明的弊端",function () {
    //同一个作用域不能重复赋值
    var a  = 2;
    function b() {
        console.log(a)
        if(false){
          var  a = 3
        }
    }
    b()
})


example.build("块级作用域与函数声明",function () {
    //同一个作用域不能重复赋值
    function a() {
        console.log('outside')
    }
    {
        if(false){
            function a() {
                console.log('inside')
            }
        }
        a()
    }
    //浏览器运行时
})

