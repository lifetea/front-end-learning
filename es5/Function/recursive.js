/**
 * Created by lifetea on 2016/11/9.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
const example = require('../../util/Example')


example.build('阶乘函数',function () {
    let factorial = function (x) {
        if(x == 0){
            return 1
        }else{
            return x * factorial(x-1)
        }
    }

    let res = factorial(5)

    console.log(res)

})


example.build('最大调用栈',function () {
    var cnt = 0;
    try {
        (function() {
            cnt++;
            arguments.callee();
        })();
    } catch(e) {
        console.log(e.message, cnt);
    }
})
