/**
 * Created by lifetea on 2016/11/13.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
const example = require('../../util/Example')

example.build('获取字符串最后单词长度(正则)',function () {
    let str = 'hello world '
    let reg = /(\W*)(\w*)\1$/i
    let [,,world] = reg.exec(str)
    let len = world.length
    console.log(len)
})
