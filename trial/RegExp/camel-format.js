/**
 * Created by lifetea on 2016/11/8.
 */
const example = require('../../util/Example')

example.build('驼峰转换',function () {
    let str = 'do-change-status'
    let reg = /^(\w+)(-)(\w)(\w*)\2(\w)(\w*)/
    let res = str.replace(reg,function (match,p1,p2,p3,p4,p5,p6,p7) {
        // console.log(match,p1,p2,p3,p4,p5,p6,p7)
        return [p1,p3.toUpperCase(),p4,p5.toUpperCase(),p6].join('')
    })
    console.log(res)
})


example.build('驼峰转换',function () {
    let str = 'do-change-status'
    let reg = /(\w)(\w*)-?/g
    let res = str.replace(reg,function (match,p1,p2,offset) {
        console.log(match,p1,p2,offset)
        if(offset == 0){
            return [p1,p2].join('')
        }else{
            return [p1.toUpperCase(),p2].join('')
        }

    })
    console.log(res)
})