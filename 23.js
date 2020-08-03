var os=require('os')
var path=require('path')

// 内存
console.log(os.totalmem()/1024/1024/1024)
// cpu信息
console.log(os.cpus())

console.log()
