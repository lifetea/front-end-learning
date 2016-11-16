/**
 * Created by lifetea on 2016/11/15.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
const example = require('../../util/Example')

example.build('绑定函数',function () {
    this.x = 2
    let foo = {
        x:1,
        getX:function () {
            return this.x
        }
    }
    let res = foo.getX()
    console.log(res)//1

    let get = foo.getX
    res = get()
    console.log(res)

    let boundGetX = get.bind(foo)
    res = boundGetX()
    console.log(res)
})