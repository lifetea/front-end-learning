/**
 * Created by lifetea on 2016/11/8.
 */
const example  =  require('../../util/Example')

example.build('边界 开头^ ',function () {
    let reg = /^an/i
    {
        let str = 'i have an apple'
        let res = reg.exec(str)
        console.log(res)
    }
    {
        let str = 'an apple'
        let res = reg.exec(str)
        console.log(res)
    }
})


example.build('边界 结束$ ',function () {
    let reg = /apple$/i
    {
        let str = 'i have an apple pen'
        let res = reg.exec(str)
        console.log(res)
    }
    {
        let str = 'an apple'
        let res = reg.exec(str)
        console.log(res)
    }
})


example.build('单词边界 \\b ',function () {
    let reg = /\bapple/i
    {
        let str = 'i have an apple pen'
        let res = reg.exec(str)
        console.log(res)
    }
    {
        let str = 'an-apple'
        let res = reg.exec(str)
        console.log(res)
    }
    {
        let str = 'apple tree'
        let res = reg.exec(str)
        console.log(res)
    }
    {
        let str = '1apple tree'
        let res = reg.exec(str)
        console.log(res)
    }
})


example.build('非单词边界 \\B ',function () {
    let reg = /\Bon/i
    {
        let str = 'afternoon'
        let res = reg.exec(str)
        console.log(res)
    }
    {
        let str = 'use on'
        let res = reg.exec(str)
        console.log(res)
    }

    // For example, /\Bon/ matches "on" in "at noon", and /ye\B/ matches "ye" in "possibly yesterday".
})