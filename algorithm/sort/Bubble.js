/**
 * Created by lifetea on 2016/11/7.
 */
const example = require('../../util/Example')

example.build('冒泡排序',function () {

    let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

    for(let i = arr.length-1;i > 0 ;i--){
        for(let j = 0;j < i;j++){
            if(arr[j] > arr[j+1]){
                let temp    =   arr[j]
                arr[j]      =   arr[j+1]
                arr[j+1]    =   temp
            }
        }
    }

    console.log(arr)

})
