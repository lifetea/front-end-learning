## [Javascript的前生今世](http://blog.csdn.net/lisiur/article/details/52087093)

    多样化:typescript coffeescript
    领域:小程序 跨平台App 游戏


## [2.前端框架的演变](https://github.com/ruanyf/jstraining/blob/master/docs/history.md)
参考地址
    YUI Prototype.js Jquery
    

## [3.前端名人堂](http://code.csdn.net/news/2820990)
    [尤雨溪](https://github.com/yyx990803),阮一峰，赵百万，Winter等等
    
    
## 4.前端的工具

### github创建工程以及克隆提交
    git babel  gulp  webpack  webstorm sublime text nodejs nginx等等。。。。
    


## 5.创建一个JS
    hello world
    

## 6.语法和变量

### 字符集
    大小写
    空格
    注释

### 直接量
    true
    false
    'hi'
    /[0-9]/i
    1.2
    {x:3}
    [1,2,3]
    
### 标识符和保留字
    var $a = 1
    var _a = 2
    var 1a = 3
### 分号
    如果当前语句和下一行语句无法合并解析的时候，在第一行后补分号
    例外1：
        return
        true
    例外2:
        x
        ++
        y
### 类型
    原始类型：primitive type 
    数字、字符串、布尔值、null、undefined 也可以成为不可变类型
    对象类型：object type
    数组、对象、正则、函数、
    
### [数字](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)
    oxff 255 八进制
    oxCAFE911 十六进制
    Math对象的方法 
    
    var x = .3 - .2
    var y = .2 - .1
    x == y
    x == .1 
    y == .1
    
### 日期时间
    var d = new Date(2017,0,1)
    
    
### 字符串
    
    var s = 'hello world'
    var t = `"hello world"`
    字符串拼接
    
    包装对象
    var s = 'test'
    s.len = 4;
    var t = s.len
    
### 正则
    var reg = /[a-9]/
### 数组
    var arr = [1,2,3,4]
### 对象
    var a = {}
    
### 函数
    function f(x){
        console.log(x)
    }
    
### null 和undefined
    null表示"没有对象"，即该处不应该有值。典型用法是：
    （1） 作为函数的参数，表示该函数的参数不是对象。
    （2） 作为对象原型链的终点。
        Object.getPrototypeOf(Object.prototype)
        // null
    undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法是：
    （1）变量被声明了，但没有赋值时，就等于undefined。
    （2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
    （3）对象没有赋值的属性，该属性的值为undefined。
    （4）函数没有返回值时，默认返回undefined。
        var i;
        i // undefined
        
        function f(x){console.log(x)}
        f() // undefined
        
        var  o = new Object();
        o.p // undefined
        
        var x = f();
        x // undefined
        
### 不可变类型和可变类型
    
    var s =  "helllo"
    s.toUpperCase()
    s
    
    var o ={x:1}
    o.x = 2
    o.y = 3


        
## 7.课堂练习


##### 第一题
    
    (function () {  
        return typeof arguments;  
    })();  
    
    A. "object"
    B. "array"
    C. "arguments"
    D. "undefined"
##### 第二题    
    var f = function g() {
        return 23;
    };
    typeof g();
    
    A. "number"
    B. "undefined"
    C. "function"
    D. Eorror
    
##### 第三题    
    (function (x) {
            delete x;
           return x;
    })(1);
    
    A. 1
    B. null
    C. undefined
    D. Error
    
##### 第四题     
    var y = 1,
        x = y = typeof x;
    x;
    
    A. 1
    B. "number"
    C. undefined
    D. "undefined"
     
     
     
##### 第五题    
     (function f(f) {
         return typeof f();
     })(function () {
         return 1;
     });
     
     A. "number"
     B. "undefined"
     C. "function"
     D. Error
     
     
##### 第六题     
     var foo = {
         bar: function () {
             return this.baz;
         },
         baz: 1
     };
     (function () {
         return typeof arguments[0]();
     })(foo.bar);
     
     A. "undefined"
     B. "object"
     C. "number"
     D. "function"
     
     
     
##### 第七题      
     var foo = {
         bar: function () {
                return this.baz;
         },
         baz: 1
     };
     typeof (f = foo.bar)();
     
     A. "undefined"
     B. "object"
     C. "number"
     D. "function"
     
##### 第八题     
     var f = (function f() {
         return "1";
     }, function g() {
         return 2;
     })();
     typeof f;
     
     A. "string"
     B. "number"
     C. "function"
     D. "undefined"
     
     
##### 第九题     
     var x = 1;
     if (function f() {}) {
         x += typeof f;
     }
     x;
     
     A. 1
     B. "1function"
     C. "1undefined"
     D. NaN
     
     
#####第十题     
     var x = [typeof x, typeof y][1];
     typeof typeof x;
     
     A. "number"
     B. "string"
     C. "undefined"
     D. "object"
     
     
##### 第十一题     
     (function (foo) {
         return typeof foo.bar;
     })({
         foo: {
             bar: 1
         }
     });
     
     A、“undefined” 
     B、“object” 
     C、“number” 
     D、Error
     
##### 第十二题     
     (function f() {
         function f() {
             return 1;
         }
         return f();
         function f() {
             return 2;
         }
     })();
     
     A、1 
     B、2 
     C、Error (e.g. “Too much recursion”) 
     D、undefined
     
##### 第十三题     
     function f() {
         return f;
     }
     new f() instanceof f;
     
     A、true 
     B、false
     
     