/**
 * Created by lifetea on 2016/11/8.
 */
const example = require('../../util/Example')


example.build('选择',function () {
    let reg = /red|green/i
    {
        let str = 'i have red apple'
        let res = reg.exec(str)
        console.log(res)
    }
    {
        let str = 'i have green apple'
        let res = reg.exec(str)
        console.log(res)
    }
})


example.build('分组',function () {
    let reg = /(foo)/
    {
        let str = 'foo bar'
        let res = reg.exec(str)
        console.log(res)
        let {$1:a} = reg.exec(str)
        console.log(a)
    }
})


example.build('分组 & \\n',function () {
    {
        let reg = /apple(,)\sorange\1/
        let str = 'apple, orange, cherry, peach'
        let res = reg.exec(str)
        console.log(res)
    }
    {
        //引用上一个匹配第一个匹配
        let reg = /(foo\s)\1/
        let str = 'foo foo foo'
        let res = reg.exec(str)
        console.log(res)
    }
})


example.build('不引用分组 (?:x)',function () {
    {
        let reg = /(?:apple)(,)\sorange\1/
        let str = 'apple, orange, cherry, peach'
        let res = reg.exec(str)
        console.log(res)
    }
})