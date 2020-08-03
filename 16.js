var fs=require('fs')

// 流式文件写入
var ws=fs.createWriteStream('hello4.txt')

ws.once('open',function  () {
    console.log('流打开了...')
})
ws.once('close',function  () {
    console.log('流关闭了...')
})

ws.write('通过可写流写入的内容1')
ws.write('通过可写流写入的内容2')
ws.write('通过可写流写入的内容3')
ws.write('通过可写流写入的内容4')

// 关闭流
ws.end()
