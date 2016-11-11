/**
 * Created by lifetea on 2016/11/8.
 */
const example = require('../../util/Example')

example.build('字符串',function () {
    var str = 'Twas the night before Xmas...';
    var newstr = str.replace(/xmas/i, 'Christmas');
    console.log(newstr);  // Twas the night before Christmas...
})

example.build('特殊字符',function () {
    var str = 'Twas the night before target... this is end';
    console.log('原版',str)
    {
        let res = str.replace(/target/i,'$$')// 插入$
        console.log('转义$',res)
    }
    {
        let res = str.replace(/target/i,'$&')
        console.log('匹配值',res)
    }
    {
        let res = str.replace(/target/i,'$`')
        console.log('前值',res)
    }
    {
        let res = str.replace(/target/i,"$'")
        console.log('后值',res)
    }
    {
        let res = str.replace(/(target)/i,"$1")
        console.log('数值',res)
    }
})


example.build('特殊参数',function () {
    var str = 'Twas the night before target... this is end';
    console.log('原版',str)
    {
        let res = str.replace(/target/i,function (match) {
            console.log('match:',match)
            return ''
        })// 插入$&
        console.log(res)
    }
    {
        let res = str.replace(/target/i,function (match,p1) {
            console.log('match:',p1)
            return ''
        })// 插入$&
        console.log(res)
    }
    {
        let res = str.replace(/target/i,'$`')
        console.log('前值',res)
    }
    {
        let res = str.replace(/target/i,"$'")
        console.log('后值',res)
    }
    {
        let res = str.replace(/(target)/i,"$1")
        console.log('数值',res)
    }
})