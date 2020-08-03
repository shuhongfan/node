exports.name='孙悟空'
exports.age=18
exports.sayName=function () {
    console.log('我是孙悟空')
}

module.exports={
    name:'猪八戒',
    age:28,
    sayName:function () {
        console.log('我是猪八戒')
    }
}
// exports和module.exports
// 通过exports只能用.的方式向外暴露内部变量
// exports.xxx=xxx
// module.exports既可以通过.的形式 也可以直接赋值
// module.exports.xxx=xxx
// module.exports={}

// var obj={}
// obj.a={}
// var a=obj.a
//
// console.log(a===obj.a)
//
// a.name='孙悟空'
//
// a=new Object()
// console.log(obj.a.name,a.name)

// var a=10
// var b=a
// a++
// console.log('a='+a)
// console.log('b='+b)

// var obj=new Object()
// obj.name='孙悟空'
// var obj2=obj
// obj2.name='猪八戒'
// obj2=null
//
// console.log(obj,obj2)
