var math=require('math')

console.log(math,math.sum([1,2,3]))

// 通过npm下载的包都放到nodemodules文件夹中
// 我们通过npm下载的包 直接通过 报名引入即可

// node在使用模块名字来引入模块时 它会首先在当前目录nodemodules中寻找是否有该模块
// 如果有则直接使用 如果没有则去上一级目录nodemodules中寻找
// 如果有则直接使用 如果没有则去上一级目录寻找 直到找到为之
// 知道找到磁盘根目录 如果依然没有 则报错
