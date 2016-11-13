/**
 * Created by lifetea on 2016/11/8.
 */
const example = require('../../util/Example')

example.build('转成驼峰',function () {
    let str = 'do-change-status-test'
    let reg = /(\w)(\w*)-?/g
    let res = str.replace(reg,function (match,p1,p2,offset) {
        console.log(match,p1,p2,offset)
        let first  = offset == 0 ? p1 : p1.toUpperCase()
        return [first,p2].join('')
    })
    console.log(res)
})


example.build('解析驼峰',function () {
    let str = 'doChangeStatusTest'
    let reg = /(?:(?:[a-z]|[A-Z])?[a-z]*)/g
    let res = str.replace(reg,function (match,offset) {
        console.log(match,offset)
        let str = (offset != 0 && !!match) ? '-' : ''
        return ['',match.toLowerCase()].join(str)
    })
    console.log(res)
})