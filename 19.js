// 创建一个可读流
var fs=require('fs')

var rs=fs.createReadStream('hello2.txt')
var ws=fs.createWriteStream('hello5.txt')

// 监听流的开启和关闭
rs.once('open',function () {
    console.log('可读流打开了')
})
rs.once('close',function () {
    console.log('可读流关闭了')
})
ws.once('open',function () {
    console.log('可写流打开了')
})
ws.once('close',function () {
    console.log('可写流关闭了')
})

// 如果要读取流中的数据 读完自动关闭
rs.on('data',function (data) {
    console.log(data)
    console.log(data.length)
    ws.write(data)
})

// pipe 可以将可读流中的内容 直接输出到可写流中
rs.pipe(ws)
