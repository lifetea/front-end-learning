/**
 * Created by lifetea on 2016/11/8.
 */

const example  =  require('../../util/Example')

example.build('匹配0个或多个 *',function () {
    {
        let reg = /\w*\b/
        let str = 'hello world'
        let res = reg.exec(str)
        console.log(res)
    }
    {
        let reg = /\w{0,}\b/
        let str = 'hello world'
        let res = reg.exec(str)
        console.log(res)
    }
})


example.build('匹配1个或多个 +',function () {
    {
        let reg = /\w+\b/
        let str = 'hello world'
        let res = reg.exec(str)
        console.log(res)
    }
    {
        let reg = /\w{1,}\b/
        let str = 'hello world'
        let res = reg.exec(str)
        console.log(res)
    }
})

example.build('匹配1个或0个 ?',function () {
    {
        let reg = /\w?/
        let str = 'hello world'
        let res = reg.exec(str)
        console.log(res)
    }
    {
        let reg = /\w{0,1}/
        let str = 'hello world'
        let res = reg.exec(str)
        console.log(res)
    }
})


example.build('匹配范围 {1,2}',function () {
    {
        let reg = /l{1,2}/
        let str = 'hello world'
        let res = reg.exec(str)
        console.log(res)
    }
})


example.build('匹配n到多个 {2,}',function () {
    {
        let reg = /l{2,}/
        let str = 'helllllo world'
        let res = reg.exec(str)
        console.log(res)
    }
})


example.build('匹配n个 {2}',function () {
    {
        let reg = /l{2}/
        let str = 'helllllo world'
        let res = reg.exec(str)
        console.log(res)
    }
})