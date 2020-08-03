var template=require('art-template')
var fs=require('fs')
fs.readFile('./34.html',function (err,data) {
    console.log(data)
    if (err){
        return console.log('去取文件失败')
    }
    var ret=template.render(data.toString(),{
        name:'shuhongfan',
        age:18,
        provices:'武汉市',
        hobbies:[
            '写代码',
            '唱歌',
            '打游戏'
        ],
        Title:'啥地方'
    })
    console.log(ret)
})

