/**
 * Created by lifetea on 2016/11/13.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
const example = require('../../util/Example')

example.build('转中文钱',function () {
    let unit= ['圆','十','百','千','万','十']
    let num = ['零','壹','贰','叁','肆','伍','陆','柒','捌','玖']
    let str = '210043.12'
    let [integer,decimal] = str.split('.')
    let reg = /(?:(\d)([0])*)/g
    let res = integer.replace(reg,function (match,n,z,offset,str) {
        console.log(match,n,z,offset,str)
        let i = str.length - offset - 1
        console.log(unit[i],i)
        let zero = '';
        if(z != undefined){
            zero = num[z]
        }
        // let first  = offset == 0 ? p1 : p1.toUpperCase()
        return [num[n],unit[i],zero].join('')
    })
    console.log(res)

    // 1	2	3	4	5	6	7	8
    // 壹	贰	叁	肆	伍	陆	柒	捌
    // 9	0
    // 十	百	千	万	亿	元
    // 玖	零	拾	佰	仟	万	亿	圆
    // 一百一十
})
