/**
 * Created by lifetea on 2016/11/8.
 */
const example = require('../../util/Example')

example.build('驼峰转换',function () {
    let str = 'do-change-status-test'
    let reg = /(\w)(\w*)-?/g
    let res = str.replace(reg,function (match,p1,p2,offset) {
        console.log(match,p1,p2,offset)
        let first  = offset == 0 ? p1 : p1.toUpperCase()
        return [p1,p2].join('')
    })
    console.log(res)
})