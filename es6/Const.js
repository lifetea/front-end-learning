/**
 * Created by lifetea on 2016/11/7.
 */
const example = require('../util/Example');

example.build('声明赋值',function () {
    const PI = 3.1415958
    try {
        PI = 4
    }catch (e){
       console.log('PI is constant variable')
    }
})


example.build('作用域',function () {
    {
        const PI = 3.1415958
    }
    try {
        console.log(PI)
    }catch (e){
        console.log('PI is undefined')
    }
})



example.build('临时性死区',function () {
    var PI = 3;
    try {
        PI = 4
        const PI = 3.1415958
    }catch (e){
        console.log('temp dead zone')
    }
})