 var foo='bar'

 function add(x,y) {
    return x+y
 }

 // exports.add=add
module.exports= {
    add:function (x,y) {
        return x+y
    },
    str:'hello'
}

 module.exports.add1=function (x,y) {
    return x+y
 }


exports.a=123
 exports={}
 exports.foo='bar'
 module.exports.b=456
