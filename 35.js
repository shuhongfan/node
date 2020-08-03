var template=require('art-template')

var tplStr=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    hello {{name}}
    我今年 {{age}} 岁了
    我来自 {{province}}
    我喜欢 {{each hobbies}} {{$value}} {{/each}}
</body>
</html>
`
var ret=template.render(tplStr,{
    name:'shuhongfan',
    age:18,
    provices:'武汉市',
    hobbies:[
        '写代码',
        '唱歌',
        '打游戏'
    ]
})
console.log(ret)
