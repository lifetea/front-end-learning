/**
 * Created by lifetea on 2016/11/8.
 */
const example  =  require('../../util/Example')

example.build('匹配字符本身',function () {
    let reg = /e/
    let str = 'hello world'
    let res = reg.exec(str)

    console.log(res)
})

example.build('反斜杠backslash',function () {
    let reg = /\s/
    let str = 'hello world'
    let res = reg.exec(str)
    console.log(res)
})


example.build('点匹配任意字符 . ',function () {
    {
        let reg = /.$/i
        let str = 'hello world'
        let res = reg.exec(str)
        console.log(res)
        //匹配单个字符 除了 line terminators: \n, \r, \u2028 or \u2029.
    }
    {
        let reg = /[^]$/i
        let str = 'hello world'
        let res = reg.exec(str)
        console.log(res)
        //匹配单个字符 除了 line terminators: \n, \r, \u2028 or \u2029.
    }

})


example.build('任何ASCII字符 \\w ',function () {
    {
        let reg = /\w/i
        let str = 'hello world'
        let res = reg.exec(str)
        console.log(res)
    }
    {
        let reg = /[a-zA-Z0-9_]/i
        let str = 'hello world'
        let res = reg.exec(str)
        console.log(res)
    }
})


example.build('任何非ASCII字符 \\W ',function () {
    {
        let reg = /\W/i
        let str = 'hello world'
        let res = reg.exec(str)
        console.log(res)
        //匹配到了空格
    }
    {
        let reg = /[^0-9a-zA-Z_]/i
        let str = 'hello world'
        let res = reg.exec(str)
        console.log(res)
        //匹配到了空格
    }
})


example.build('unicode空白字符 \\s ',function () {
    let reg = /\s/i
    let str = 'hello world'
    let res = reg.exec(str)

    console.log(res)

})


example.build('unicode空白字符 \\s ',function () {
    let reg = /\s/i
    let str = 'hello world'
    let res = reg.exec(str)

    console.log(res)

})


example.build('unicode非空白字符 \\S ',function () {
    let reg = /\S/i
    let str = 'hello world'
    let res = reg.exec(str)

    console.log(res)

})


example.build('任何ASCII数字 \\d ',function () {
    {
        let reg = /\d/i
        let str = 'hello world 3'
        let res = reg.exec(str)
        console.log(res)
    }
    {
        let reg = /[0-9]/i
        let str = 'hello world 3'
        let res = reg.exec(str)
        console.log(res)
    }

})


example.build('非ASCII数字 \\D ',function () {
    {
        let reg = /\D/i
        let str = 'hello world 3'
        let res = reg.exec(str)
        console.log(res)
    }
    {
        let reg = /[^0-9]/i
        let str = 'hello world 3'
        let res = reg.exec(str)
        console.log(res)
    }

})