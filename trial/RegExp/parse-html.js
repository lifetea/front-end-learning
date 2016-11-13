/**
 * Created by lifetea on 2016/11/13.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
const example = require('../../util/Example')

example.build('解析href',function () {
    let str =
`
<div>IT面试题博客中包含很多
    <a href="http://hi.baidu.com/mianshiti/blog/category/微软面试题"> 微软面试题 </a>
    <a href= " http://hi.baidu.com/mianshiti/blog/category/微软面试题"> 微软面试题 </a>  
</div>
`
    console.log(str)
    let reg = /(?:[hH][rR][eE][fF]\s*=\s*['"]\s*)(.*)['"]/g
    let res = str.replace(reg,function (match,url,p2,offset) {
        console.log(url)
        //let first  = offset == 0 ? p1 : p1.toUpperCase()
        //return [first,p2].join('')
    })
    // console.log(res)
})

