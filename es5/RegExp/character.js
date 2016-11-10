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
    let reg = /.$/i
    let a   = 'hello world'
    let b   = ' hello world+1'
    let ra  = a.match(reg)
    let rb  = b.match(reg)

    console.log(ra)

    console.log(rb)
    //匹配单个字符 除了 line terminators: \n, \r, \u2028 or \u2029.
})


example.build('任何ASCII \\w ',function () {
    let reg = /\w/i
    let str = 'hello world'
    let res = reg.exec(str)

    console.log(res)
})


example.build('任何非ASCII \\W ',function () {

    let reg = /\W/i
    let str = 'hello world'
    let res = reg.exec(str)

    console.log(res)
    //匹配到了空格
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
    let reg = /\d/i
    let str = 'hello world 3'
    let res = reg.exec(str)

    console.log(res)

})


example.build('非ASCII数字 \\D ',function () {
    let reg = /\D/i
    let str = 'hello world 3'
    let res = reg.exec(str)

    console.log(res)

})