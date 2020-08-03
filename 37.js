var url=require('url')

var obj=url.parse('http://127.0.0.1:3000/pinglun?name=345345&message=534534')

console.log(obj)

var obj1=url.parse('http://127.0.0.1:3000/pinglun?name=345345&message=534534',true)

console.log(obj1)
