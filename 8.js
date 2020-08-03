exports.add=function (a,b){
    return a+b
}
exports.mul=function (a,b){
    return a*b
}

a=10
console.log(global)
console.log(global.a)

console.log(arguments)
console.log(arguments.callee+'') // 保存当前执行的函数对象

// node在执行模块代码时 他会首先在代码的最顶部 添加如下代码
// function (exports, require, module, __filename, __dirname) {}

// 实际上模块中的代码都是包装在一个函数中执行的 并且在函数执行时 同时传递进了5个实参
//     exports,  该对象用来将变量或函数暴露到外部
//     require,  用来引入外部的模块
//     module,  代表当前模块本身
//                 exports就是module属性
//                     既可以使用exports导出 也可以使用module.exports导出
//     __filename, 当前模块的完整路径
//     __dirname 当前模块在所在文件夹的路径

console.log(exports)
console.log(module.exports===exports)
console.log(module)
console.log(__filename)
console.log(__dirname)
