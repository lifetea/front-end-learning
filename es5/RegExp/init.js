/**
 * Created by lifetea on 2016/11/8.
 */
const example  =  require('../../util/Example')


//str 包含 math replace search split 等方法


example.build('定义正则',function () {
    let reg = RegExp('e','i')
    let str = 'hello world'
    let val = str.match(reg)
    console.log(val)
})


example.build('正则字面量',function () {

    let reg = /e/i
    let str = 'hello world'
    let val = str.match(reg)
    console.log(val)

    function createReg() {
        let re = /e/i
        reg.foo = 'bar'
        return re
    }

    let re1 = createReg()
    let re2 = createReg()

    console.log(re1 == re2) // es5 和 es6 中正则字面量都是生成一个新的正则

    re2.foo = 'baz'

    console.log('re1',re1)

    console.log('re2',re2)

})
