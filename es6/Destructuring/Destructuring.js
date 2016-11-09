/**
 * Created by lifetea on 2016/11/7.
 */
const example  = require('../../util/Example')

example.build('赋值',function () {
    var [a, b, c] = [1, 2, 3];

    console.log([a, b, c])

    var [d] = [1]
    console.log(d)
})


example.build('解构模式',function () {
    var [a, b ,...c] = [1, 2, 3];
    console.log(c)
})


example.build('解构默认值',function () {

    var [foo = true] = [];

    // true
    console.log(foo)

    try{
        [a,b=3] = [2]
        console.log(a)
    }catch(e){
        console.log('解构默认 let ')
    }

    //console.log(x)  // x is not defined

    //[x, y = 'b'] = ['a']; // x='a', y='b'

    [x, y = 'b'] = ['a', undefined];

    console.log([x,y]) // y is not undefined
    // x='a', y='b'

    var [d = 1] = [null];

    console.log(d)//null 不严格等于undefined
})


example.build('表达式解构',function () {

    function f() {
        console.log('aaa');
        return 2
    }

    let [x = f()] = [1];

    console.log(x)

})


example.build('对象解构',function () {
    {
        //与数组不同的是 对象解构不按顺序
        let {foo,bar} = {bar:'world',foo:'hello'}

        console.log({foo,bar})
    }
    {
        let {baz} = {bar:'world',foo:'hello'}

        console.log({baz})
    }
    {
        let {foo:baz} = {foo:'hello',bar:'world'}

        console.log({baz})
    }
    {
        let a = {foo} = {foo:'hello',bar:'world'}

        console.log({foo})
    }
})