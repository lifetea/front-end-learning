/**
 * Created by lifetea on 2016/11/7.
 */
// export default
module.exports = {
    build:function (name,cb) {
        console.log("-----"+name+"-------")
        cb()
        console.log('\r')
    }
}
