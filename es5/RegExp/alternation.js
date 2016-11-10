/**
 * Created by lifetea on 2016/11/8.
 */
const example  =  require('../../util/Example')


//str 包含 math replace search split 等方法


example.build('选择',function () {
    let reg = /red|green/i
    {
        let str = 'i have red apple'
        let res = reg.exec(str)
        console.log(res)
    }
    {
        let str = 'i have green apple'
        let res = reg.exec(str)
        console.log(res)
    }
})

