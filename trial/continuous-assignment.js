/**
 * Created by lifetea on 2016/11/7.
 */
const example = require('../util/Example')
//http://resources.jointjs.com/demos/javascript-ast
example.build('连续赋值',function () {
    var a = {n:1}
    var b = a
    a.x = a = {n:2}
    //1 获取 a.x 创建 ref 假设
    //2 获取 a   创建 ref 由于a ref 已经改变  x没能挂载在a上但存在内存中
    //3 a = {n:2}
    //4 x = {n:2}
    //5 当前对象a 中没有x属性 所以 a.x 为 undefined
    console.log(a.x)
})