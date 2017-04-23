## Javascript的前生今世


[博客地址](http://blog.csdn.net/lisiur/article/details/52087093)

    多样化:typescript coffeescript
    领域:小程序 跨平台App 游戏


##[2.前端框架的演变](https://github.com/ruanyf/jstraining/blob/master/docs/history.md)
参考地址
    YUI Prototype.js Jquery
    

##[3.前端名人堂](http://code.csdn.net/news/2820990)
    [尤雨溪](https://github.com/yyx990803),阮一峰，赵百万，Winter等等
    
    
##4.前端的工具
    git babel  gulp  webpack  webstorm sublime text nodejs nginx等等。。。。
    


##5.创建一个JS
    hello world
    

##6.语法和变量


##7.课堂练习


#####第一题
    
    (function () {  
        return typeof arguments;  
    })();  
    
    A. "object"
    B. "array"
    C. "arguments"
    D. "undefined"
#####第二题    
    var f = function g() {
        return 23;
    };
    typeof g();
    
    A. "number"
    B. "undefined"
    C. "function"
    D. Eorror
    
#####第三题    
    (function (x) {
            delete x;
           return x;
    })(1);
    
    A. 1
    B. null
    C. undefined
    D. Error
    
#####第四题     
    var y = 1,
        x = y = typeof x;
    x;
    
    A. 1
    B. "number"
    C. undefined
    D. "undefined"
     
     
     
#####第五题    
     (function f(f) {
         return typeof f();
     })(function () {
         return 1;
     });
     
     A. "number"
     B. "undefined"
     C. "function"
     D. Error
     
     
#####第六题     
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
     
     
     
#####第七题      
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
     
#####第八题     
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
     
     
#####第九题     
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
     
     
#####第十一题     
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
     
#####第十二题     
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
     
#####第十三题     
     function f() {
         return f;
     }
     new f() instanceof f;
     
     A、true 
     B、false
     
     