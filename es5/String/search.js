/**
 * Created by lifetea on 2016/11/8.
 */

const example = require('../../util/Example')


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// A regular expression object. If a non-RegExp object obj is passed,
// it is implicitly converted to a RegExp by using new RegExp(obj).
example.build('不是正则表达式',function () {
    let str = 'hello world'
    let res = str.search('l')// 会通过RegExp 生成 正则对象
    console.log(res)

})

example.build('正则表达式',function () {
    let str = 'hello world'
    let res = str.search(/l/g)// g  没有作用
    console.log(res)
})


example.build('没有匹配到',function () {
    let str = 'hello world'
    let res = str.search(/z/)   // g  没有作用
    console.log(res)    //没找到返回-1
})
