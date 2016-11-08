/**
 * Created by lifetea on 2016/11/7.
 */
const example = require('../../util/Example');

example.build('选择排序先排小',function () {

    let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

    for(let [i,len] = [0,arr.length];i < len;i++){
        let min = arr[i];
        let k   = i;
        for(let j = 1+i;j < len; j++){
            if(min > arr[j]){
                k = j
                min = arr[j]
            }
        }
        arr[k] = arr[i]
        arr[i] = min
    }
    console.log(arr)
})
