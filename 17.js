var fs=require('fs')

var rf=fs.readFile('hello4.txt',function (err,data) {
    if (!err){
        console.log(data.toString())
        fs.writeFile('hello2.txt',data,function (err) {
            if (!err){
                console.log('文件写入成功')
            }
        })
    }
})
