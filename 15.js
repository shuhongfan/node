var fs=require('fs')

fs.writeFile('hello3.txt','这是通过writefile写入的内容',{flag:'a'},function (err) {
    if (!err){
        console.log('写入成功')
    }else {
        console.log(err)
    }
})
