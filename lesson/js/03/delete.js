/**
 * Created by lifetea on 2017/5/3.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
// 不能删除变量 只能删除属性
function fun(x){
    delete x;
    return x;
}
var val = fun(1)
console.log(val)


//delete 的应用


var search = {
    name:'lifetea',
    age:'1',
    sex:""
}

// http://www.baidu.com?name=lifetea&age=1&sex=


//到后台   sex = null  查询不到结果

// Vue.post(url,search)

console.log(search)
for(var a in search){
    // console.log(a);
    if(search[''+a] == ""){
        delete search[''+a]
    }
}

console.log(search)