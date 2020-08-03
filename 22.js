var http=require('http')

var server=http.createServer()

server.on('request',function (req,res) {
    var url=req.url
    console.log('收到请求,请求路径是：',url)
    console.log('收到请求,请求路径是：',req.socket.remoteAddress,req.socket.remotePort)
    if (url==='/'){
        res.end('index page')
    } else if (url==='/login'){
        res.end('login page')
    } else if (url==='/products'){
        var products=[
            {
                name:'苹果 x',
                price:8888
            },
            {
                name:'香蕉 x',
                price:1111
            },
            {
                name:'橘子 x',
                price:2222
            }
        ]
        // 响应内容只能是二进制数据或者字符串
        res.end(JSON.stringify(products))
    } else {
        res.end('404 not found')
    }
})

server.listen('3000',function () {
    console.log('服务器启动成功')
})
