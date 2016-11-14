/**
 * Created by lifetea on 2016/11/14.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
const example = require('../../util/Example')

example.build('rest 和 arguments',function () {
    
    {
        let log = function (...vals) {
            console.log(typeof vals,vals)
            console.log(typeof arguments,arguments)
        }
        log(1,2,3)
    }

    {
        let sort = (...vals) => vals.sort()
        let res  = sort(2,3,1)
        console.log(res)
    }
    {
        //rest 后不能跟参数
        //Rest parameter must be last formal parameter
        // let sort = function (...vals,a) {
        //
        // }
    }
    {
        //length
        let log = (a,...vals) => {}
        console.log(log.length)
        // 1
    }
})