var fs=require('fs')

// 检查文件是否存在existsSync
var inexits=fs.existsSync('hello.txt')
console.log(inexits)

// 获取文件信息stat
fs.stat('hello.txt',function (err,stat) {
    console.log(arguments)
    console.log(err,stat)
    // 是否文件
    console.log(stat.isFile())
    // 是否为文件夹
    console.log(stat.isDirectory())
})

// 删除文件unlinkSync
// fs.unlinkSync()

// 读取目录结构readdir
fs.readdir('.',function (err,files) {
    if (!err){
        console.log(files)
    }
})

// 截断文件 将文件修改为指定大小truncateSync
fs.truncateSync('hello2.txt',10)

// 创建目录mkdirSync
// fs.mkdirSync('haha.txt')
//
// fs.rmdirSync('haha.txt')

// 重命名文件
// 移动文件、
fs.rename('hello4.txt','haha.txt',function (err) {
    if (!err){
        console.log('修改成功')
    }
})

// 监视文件修改
fs.watchFile('hello2.txt',{interval:100},function (curr,prev) {
    console.log('文件发生变化',curr.size,prev.size)
    console.log(arguments)
    console.log()
})
