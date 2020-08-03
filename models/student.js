var mongoose=require('mongoose')

var Schema=mongoose.Schema

var stuSchema=new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:'female'
    },
    address:String
})

var StuModel=mongoose.model('student',stuSchema)

module.exports=StuModel
