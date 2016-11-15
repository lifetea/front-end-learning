/**
 * Created by lifetea on 2016/11/15.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
const example = require('../../util/Example')

example.build('thisArg',function () {
    x = 1
    let log = function () {
        console.log(this.x)
    }
    log()//1
    {
        // null undefined
        log.call() //global
        log.call(null)
        log.call(undefined)
    }
    {
        // object
        log.call({x:2})//2
    }
    {
        //primary will be boxed
        log.call(1)
    }
})


example.build('inherit',function () {
    {
        let P = function (name,age) {
            this.name = name
            this.age = age
        }
        let F = function (name,age,category) {
            P.call(this,name,age)
            this.category = category
        }
        let T = function (name,age,category) {
            P.call(this,name,age)
            this.category = category
        }

    }
})


example.build('匿名函数',function () {
    //调用匿名函数
    (function () {
        console.log(this)
    }).call({x:1})
    // 箭头函数this 定义的时候就绑定了无法改变
    // (() => { console.log(this) }).call({x:1})
})


example.build('apply 实现call',function () {
    let log = function () {
        console.log(this.x)
    }
    // log.apply({x:1},(...args) => args)
})