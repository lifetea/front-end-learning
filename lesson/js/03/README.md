## gulp sass 
    http://www.gulpjs.com.cn/docs/getting-started/
    https://www.npmjs.com/package/gulp-sass
    https://github.com/scniro/gulp-clean-css 
    https://github.com/contra/gulp-concat

### delete

    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete
    
    delete
    function fun(x){
        delete x; 
        return x;
    }
    var val = fun(1)
    
    
    
### time

    function dat(){
        var now=new Date();
        var hour=now.getHours();
        if((hour>5)&&( hour<=7)){
            alert("早上好");
        }else if((hour>7)&&(hour<=11)){
        alert("上午好，祝您好心情");
        }else if((hour>11)&&(hour<=13)){
        alert("中午好");
        }else if((hour>13)&&(hour<=17)){
        alert("下午好");
        }else if((hour>17)&&(hour<=21)){
        alert("晚上好");
        }else if((hour>21)&&(hour<=23)){
        alert("深夜了，注意身体哦");
        }else{
         alert("凌晨了，该注意休息了");
        }
     };
    
    
### 字符串
    http://js.yzfjy.com/course/Viewer/1?uid=1&lid=1#sid_1
    var s = 'hello world'
    var t = `"hello world"`
    字符串拼接
    
    包装对象
    var s = 'test'
    s.len = 4;
    var t = s.len
    
### 数组
    var arr = [1,2,3,4]
     
### 作业
    1 gulp 搭建 以及插件使用
    2 "ahat4.3"  数值提取
    