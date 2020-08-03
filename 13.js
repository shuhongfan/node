// 引入fs模块
var fs=require('fs')

// 打开文件
var fd=fs.openSync('hello.txt','w')
console.log(fd)

// 向文件写入内容
fs.writeSync(fd,'今天天气真不错！！！',20)

// 关闭文件
fs.closeSync(fd)
