// 连接数据库
var mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1/mongoose_test')
mongoose.connection.once('open',function () {
    console.log('数据库连接成功~~~')
})

// 约束对象
var Schema=mongoose.Schema
// 创建schema对象
var stuSchema=new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:'female'
    },
    address:String
})

// 通过schema来创建model
// model代表的是数据库中的集合 通过model才能对数据库进行操作
var stuModel=mongoose.model('student',stuSchema)

// 创建一个document
var stu=new stuModel({
    name:'奔波霸',
    age:48,
    gender:'male',
    address:'湖北武汉'
})
console.log(stu)
// stu.save(function (err) {
//     if (!err){
//         console.log('保存成功')
//     }
// })
stuModel.findOne({},function (err,doc) {
    if (!err) {
        console.log(doc)
        doc.update({$set:{age:27}},function (err) {
            if (!err){
                console.log('修改成功')
            }
        })
        doc.age=2222
        doc.save()
        // doc.remove(function (err) {
        //     if (!err){
        //         console.log('大师兄再见')
        //     }
        // })

        console.log(doc.get('name'))
        doc.set('name','朱小小234')
        console.log(doc.name)

        doc1=doc.toObject()
        delete doc1.address
        console.log(doc1)
    }
})
