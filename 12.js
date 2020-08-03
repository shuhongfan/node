// buffer缓冲区
// buffer的结构和数组很像 操作的方法也和数组类似
// 数组中不能存储二级制文件 而buffer就是专门用来存储二进制数据
// buffer存储都是二进制数据 但是在显示时都是以16进制的形式显示
var str="HELLO BAIDU"

// 将一个字符串转换为buffer
var buf=Buffer.from(str)

console.log(buf)

// 创建一个10个字节的buffer
var buf2=Buffer.alloc(10)
buf2[0]=88
buf2[1]=255
buf2[2]=0xaa
buf2[3]=257
buf2[10]=15
console.log(buf2)

// 只要是数字输出一定是10
console.log(buf2[2].toString(16))

for (let i = 0; i <buf2.length; i++) {
    console.log(buf2[i])
}

// 创建一个指定大小的buffer 但包含敏感数据
var buf3=Buffer.allocUnsafe(10)
console.log(buf3)

var buf4=Buffer.from('我是一段文本数据')

// 将缓冲区中的数据转换为字符串
console.log(buf4.toString())
