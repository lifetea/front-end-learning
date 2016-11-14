/**
 * Created by lifetea on 2016/11/14.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
const example = require('../../util/Example')

example.build('作用域',function () {
    {
        console.log('作用域一')
        let x = 1
        function log(x,y=x) {
            console.log(x,y)
        }
        log(2)
    }
    {
        console.log('作用域二')
        let x = 1
        //指定外部默认参数如前面没有定义则使用外部定义的
        function log(y=x) {
            let x = 3
            console.log(x,y)
        }
        log()
        log(2)
    }
    {
        console.log('作用域三')
        function log(y=x) {
            let x = 1
            console.log(x,y)
        }
        log(2)
        // log() //报错
    }

    {
        console.log('作用域四 重复定义')
        function log(x) {
            // let x = 1  error
            console.log(x)
        }
        log(2)
    }
})


example.build('默认函数参数',function(){
    {
        let foo = 'outer';
        function bar(func = x => foo) {
            let foo = 'inner';
            console.log(func()); // outer
        }
        bar();
    }
    {
        let foo = 'outer';
        function bar(func = () => foo) {
            let foo = 'inner';
            console.log(func()); // outer
        }
        bar();
    }
    {
        console.log('---函数三---')
        var x = 1;
        function foo(x, y = function() { x = 2; console.log(x)}) {
            var x = 3;
            y();
            console.log(x);
        }

        foo() // 3
        console.log(x)
    }
    {
        var x = 1;
        function foo(x, y = function() { x = 2; }) {
            var x = 3;
            y();
            console.log(x);
        }

        foo() // 3
    }
    {
        //默认函数参数 调用的是外部的变量
        var x = 1;
        function foo(x, y = function() { x = 2; }) {
            x = 3;
            y();
            console.log(x);
        }

        foo() // 2
    }
})
