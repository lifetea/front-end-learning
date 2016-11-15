/**
 * Created by lifetea on 2016/11/15.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
const example = require('../../util/Example')

example.build('thisArg',function () {
    let log = function () {
        console.log(this)
    }
    {
        // null and undefined will be replaced with the global object
        // log.apply(null)
        // log.apply()
    }
    {
        //对象
        log.apply({x:1})
    }
    {
        //原始值 will be boxed
        log.apply(1)
    }
})


example.build('construction',function () {
    {
        //用于构造
        Function.prototype.createObject = function (args) {
            let ob = Object.create(this.prototype)
            this.apply(ob,args)
            return ob
        }
        
        let MyContrutor = function () {
            for(let i = 0 ;i < arguments.length;i++){
                this['property' + i] = arguments[i];
            }
        }

        let myArray = [4, 'Hello world!', false];

        let res = MyContrutor.createObject(myArray)

        console.log(res)
    }
    {
        //Using apply and built-in functions
        let arr = [1,2,6,4,7,5]
        let res = Math.max.apply(null,arr)
        console.log(res)
    }
})