var foo='aaa'

console.log('a start')

exports.add=function (x,y){
    return x+y
}

var ret=require('./25')
console.log(ret)
console.log(ret.foo)

console.log('a end')

console.log(foo)
