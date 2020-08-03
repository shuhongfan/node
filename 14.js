// 引入fs模块
var fs=require('fs')

var f
fs.open('hello.txt','w',function (err,fd) {
    console.log(arguments)
    if (!err){
        console.log(fd)
        f=fd
        fs.write(f,'哈哈哈哈啊哈哈',function (err) {
            console.log(arguments)
            if (!err){
                console.log('写入成功')
            }
            fs.close(fd,function (err) {
                if (!err){
                    console.log('文件已关闭')
                }
            })
        })
    }else {
        console.log(err)
    }
})

