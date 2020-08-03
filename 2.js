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

// 向数据库中插入一个文档
stuModel.create({
    name:'白骨精',
    age:18,
    // gender:'male',
    address:'花果山'
},function (err) {
    if (!err){
        console.log('插入成功')
    }
})
