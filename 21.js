var http=require('http')

var server=http.createServer()

server.on('request',function (request,response) {
    console.log('收到客户端的请求了',request.url)
    // console.log(arguments)
    // write可以使用多次 但最后一次要用end来结束响应
    response.write('hello')
    response.write(' nodejs')
    response.end()
})

server.listen(3000,function () {
    console.log('服务器启动成功了')
})
