/**
 * Created by lifetea on 2016/11/13.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
const example = require('../../util/Example')

example.build('数字千分',function () {
    let str          = '39736484599'
    let regSplit     = /^(\d{1,3})((?:\d{3})+)$/
    let [,head,body] = str.match(regSplit)
    let reg          = /(\d{3})/g
    let res              = head + body.replace(reg,",$&")
    console.log(res)
})
