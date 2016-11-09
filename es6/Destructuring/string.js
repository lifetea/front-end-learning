/**
 * Created by lifetea on 2016/11/9.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
const example = require('../../util/Example')

example.build('字符串解构',function () {

    const [a, b, c, d, e] = 'hello';
    a // "h"
    b // "e"
    c // "l"
    d // "l"
    e // "o"
    
})


example.build('对象属性',function () {

    let {length : len} = 'hello';

    len // 5
})