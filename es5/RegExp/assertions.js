/**
 * Created by lifetea on 2016/11/8.
 */
const example = require('../../util/Example')

example.build('断言',function () {
    let reg = /ab(?=f)/
    let str = 'abf abc'
    let res = reg.exec(str)
    console.log(res)
})

example.build('断言',function () {
    let reg = /ab(?!f)/
    let str = 'abf abc'
    let res = reg.exec(str)
    console.log(res)
})