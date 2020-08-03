Array.prototype.mySlice=function () {
    var start=0
    var end=this.length
    if (arguments.length===1){
        start=arguments[0]
    } else if (arguments.length===2){
        start=arguments[0]
        end=arguments[1]
    }
    var tmp=[]
    for (var i = start; i < end; i++) {
        tmp.push(this[i])
    }
    return tmp
}
var fakeArr={
    0:'abc',
    1:'efg',
    2:'baba',
    length:3
}

console.log(fakeArr)

;[].mySlice.call(fakeArr)
