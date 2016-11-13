/**
 * Created by lifetea on 2016/11/13.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
const example  = require('../../util/Example')

example.build('默认参数',function () {
    function log(x=0,y) {
        //let x
        var x
        console.log(x,y)
    }
    log(undefined,4)
})

example.build('解构默认参数',function () {
    function log({x=2,y=4}) {
        console.log(x,y)
    }
    log({x:3,})
})