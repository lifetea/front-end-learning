/**
 * Created by lifetea on 2016/11/14.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
const example = require('../../util/Example')

example.build('length属性',function () {
    function log(a,b = 1,c) {

    }
    console.log(log.length)
})