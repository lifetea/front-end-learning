/**
 * Created by lifetea on 2016/11/9.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */

const example = require('../../util/Example')

example.build('归并排序',function () {

    let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

    let merge = function (left,right) {
        var temp = []
        while (left.length && right.length){
            if(left[0] > right[0]){
                temp.push(left.shift())
            }else{
                temp.push(right.shift())
            }
        }
        return temp.concat(left,right)
    }
    
    let mergeSort = function (src) {
        if(src.length == 1)
            return src
        let middle = ~~(src.length/2)
        let left   = src.slice(0,middle)
        let right  = src.slice(middle)
        return merge(mergeSort(left),mergeSort(right))
    }

    let res = mergeSort(arr)

    console.log(res)
})