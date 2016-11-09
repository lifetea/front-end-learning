/**
 * Created by lifetea on 2016/11/8.
 */
const example = require('../../util/Example');

example.build('插入排序数组',function () {

    let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

    for(let [i,len] = [1,arr.length];i < len;i++){
        for(let j = i; j > 0;j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }else{
                //找打合适位置退出循环
                break
            }
        }
    }

    console.log(arr)
})
