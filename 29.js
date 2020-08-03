var http=require('http')
var fs=require('fs')
var template=require('art-template')

// 1.创建server
var server=http.createServer()

var wwwDir='E:/练习DEMO/node/resource'

// 2.监听server的request请求事件 设置请求处理函数
server.on('request',function (req,res) {
    var url=req.url
    if (url==='/'){
        fs.readFile(wwwDir+'/template.html',function (err,data) {
            if (err){
                res.end('404 not found!!!!')
            }
            fs.readdir(wwwDir,function (err,files) {
                if (err){
                    return res.end('can not find www dir')
                }
                // var content=''
                // files.forEach(item=>{
                //     content+=`<tr><td>${item}</td></tr>`
                // })
                // data=data.toString()
                // data=data.replace('aaaaaa',content)
                // data=data.replace('<h1>的索引</h1>',content)

                // 这里只需要模板引擎替换data中的模板字符串就可以了
                var htmlStr=template.render(data.toString(),{
                    title:'哈哈',
                    files:files
                })
                console.log(htmlStr)
                res.end(htmlStr)
            })
        })
    } else {
        fs.readFile(wwwDir+url,function (err,data) {
            // if (err){
            //     res.end('404 not found')
            // } else {
            //
            // }
            if (err){
                return res.end('404 not found1')
            }
            res.end(data)
        })
    }
})

// 3.绑定端口号 启动服务
server.listen(3000,function () {
    console.log('runnning')
})
