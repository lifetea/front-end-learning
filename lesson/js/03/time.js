/**
 * Created by lifetea on 2017/5/3.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
function dat(){
    var now=new Date();
    var hour=now.getHours();
    if((hour>5)&&( hour<=7)){
        window.alert("早上好");
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

dat()