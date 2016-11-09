/**
 * Created by lifetea on 2016/11/7.
 */
const example  = require('../../util/Example')


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

})


example.build('字面量解构',function () {
    let a,b

    ({a,b} = {a:1,b:2})
    //用()包裹 不然会解析成对象字面量

    console.log(a,b)
})


example.build('解构之模式',function () {
    let bar
    let {bar: baz} = {bar: 1,baz : 2}
    //bar 只是模式 baz才是真正的变量 所以下面会报错
    console.log(baz)

    // 报错
    // let baz
    // let {bar: baz} = {bar: 1}

})


example.build('解构默认值',function () {
    //默认值用等号 =
    let {a=1,b=2} = {a:3}
    console.log(a,b)

    let {c:d=4} = {d:5,c:7}

    console.log(d)//7

    let {e=1,f=2} = {a:undefined,f:null}

    console.log(e,f)

})


example.build('解构默认参数',function () {
    
    let f = function ({a=1,b={c:2}} = {}) {
        console.log(a)
    }
    f({a:3})
})


example.build('迭代器解构',function () {

    let arr = [{name:'life'},{name:'tea'}]

    for(var {name} of arr)
        console.log(name)

})


example.build('解构函数参数',function () {

    let getLastName = function ({lastName}) {
        console.log(lastName)
    }
    
    let getFirstName = function ({firstName}) {
        console.log(firstName)
    }
    let user = {
        firstName:'li',
        lastName:'songyang'
    }
    getFirstName(user)

    getLastName(user)
})