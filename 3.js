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
// stuModel.create([
//     {
//         name:'猪八戒',
//         age:28,
//         gender:'male',
//         address:'高老庄'
//     },{
//         name:'唐僧',
//         age:16,
//         gender:'male',
//         address:'女儿国'
//     }
// ],function (err) {
//     // console.log(err)
//     if (!err){
//         console.log('插入成功')
//         // console.log(arguments)
//     }
// })

// stuModel.find({name:'唐僧'},{name:1,_id:0},function (err,docs) {
//     if (!err){
//         console.log(err)
//         console.log(docs[0].name)
//         console.log(docs)
//     }
// })

// stuModel.find({},'name age -_id',{skip:3,limit:2},function (err,docs) {
//     if (!err){
//         console.log(err)
//         console.log(docs[0].name)
//         console.log(docs)
//     }
// })

// stuModel.findOne({},function (err,doc) {
//     if (!err){
//         console.log(err)
//         console.log(doc.name)
//         console.log(doc)
//     }
// })

// stuModel.findById('5f0c40fd3620feb458da584e',function (err,doc) {
//     if (!err){
//         console.log(doc.name)
//         console.log(doc instanceof stuModel)
//     }
// })

stuModel.update({name:'唐僧'},{$set:{age:20}},{ multi: true },function (err,doc) {
    if (!err){
        console.log(doc)
    }
})

stuModel.remove({name:'唐僧'},function (err) {
    if (!err){
        console.log(err)
    }
})

stuModel.count({},function (err,count) {
    if (!err){
        console.log(count)
    }
})
