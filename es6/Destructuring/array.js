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

    let [a = f()] = [undefined];
    let [b = f()] = [1];
    let [c = d = 2] = [1];
    console.log(a)
    console.log(b)
    console.log(c)
})


example.build('数组嵌套解构',function () {
    let [a,[b]] = [1,[2]]
    console.log(a,b)
})


example.build('函数返回解构',function () {
    function f() {
        return [1,2]
    }
    let [a,b] = f()
    console.log(a,b)
})


example.build('忽略返回值',function () {
    function f() {
        return [1,2,3]
    }
    let [a,,c] = f()
    console.log(a,c)
})


example.build('正则返回解构',function () {
    var url = "https://developer.mozilla.org/en-US/Web/JavaScript";
    let reg = /^(\w+)\:\/\/([^\/]+)\/(.*)$/ig
    let res = reg.exec(url)
    console.log(res)
})