/**
 * Created by lifetea on 2016/11/14.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
const example = require('../../util/Example')

example.build('定义函数',function () {
    {
        let log = function (x) {
            console.log(x)
        }
        log(2)
    }
    {
        let log = x => console.log(x)
        log(2)
    }
})

example.build('没有参数',function () {
    {
        //没有参数
        let log = () => console.log(6)
        log()
    }
    {
        //多语句
        let log = () => { console.log(6); 6  }
        log()
    }
    {
        //返回对象
        let log = () => ({x:1,y:2})
        let res = log()
        console.log(res)
    }
    {
        //没有 arguments
        let log = () => console.log(arguments)
        log(1,2,3)
    }
    {
        id = 10
        //this bind
        let bar = function () {
            console.log(this.id)
        }
        bar.call({id:20})

        let fun = () => console.log(this.id)
        fun.call({id:30})
    }
})