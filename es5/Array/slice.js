/**
 * Created by lifetea on 2016/11/9.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
const example = require('../../util/Example')

example.build('截取数组',function () {
    var a = ["zero", "one", "two", "three"];
    var sliced = a.slice(1,3);// 开始 结算

    // 返回一个新的数组 并不改变原来的数组

    console.log(a);      // [ "zero", "one", "two", "three" ]
    console.log(sliced); // [ "one", "two" ]
})